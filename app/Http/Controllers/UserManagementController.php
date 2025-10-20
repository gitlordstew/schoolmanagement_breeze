<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class UserManagementController extends Controller
{
    /**
     * Display user management dashboard
     */
    public function index(): Response
    {
        $user = auth()->user();
        
        // Check if user can manage others
        if (!$user->canManageUsers()) {
            abort(403, 'Unauthorized access.');
        }
        
        $users = User::select([
            'id', 'name', 'email', 'role', 'student_id', 'employee_id', 
            'birthdate', 'phone', 'grade', 'created_at', 'email_verified_at',
            'force_password_change', 'last_password_change'
        ])
        ->orderBy('created_at', 'desc')
        ->paginate(20);
        
        // If admin role, show comprehensive management interface
        if ($user->role === 'admin') {
            return $this->adminIndex();
        }
        
        return Inertia::render('UserManagement/Index', [
            'users' => $users,
            'canCreate' => true,
        ]);
    }
    
    /**
     * Display comprehensive admin user management dashboard
     */
    public function adminIndex(): Response
    {
        $users = User::select([
            'id', 'name', 'email', 'role', 'student_id', 'employee_id', 
            'birthdate', 'phone', 'grade', 'created_at', 'email_verified_at',
            'force_password_change', 'last_password_change'
        ])
        ->orderBy('created_at', 'desc')
        ->paginate(50); // More users for admin view
        
        // Get user counts by role
        $userCounts = [
            'total' => User::count(),
            'students' => User::where('role', 'student')->count(),
            'teachers' => User::where('role', 'teacher')->count(),
            'admins' => User::where('role', 'admin')->count(),
            'moderators' => User::where('role', 'moderator')->count(),
            'hr' => User::where('role', 'hr')->count(),
            'registrars' => User::where('role', 'registrar')->count(),
        ];
        
        return Inertia::render('AdminUserManagement', [
            'users' => $users,
            'canCreate' => true,
            'userCounts' => $userCounts,
        ]);
    }
    
    /**
     * Show form to create new user
     */
    public function create(): Response
    {
        $user = auth()->user();
        
        if (!$user->canManageUsers()) {
            abort(403, 'Unauthorized access.');
        }
        
        return Inertia::render('UserManagement/Create');
    }
    
    /**
     * Store new user
     */
    public function store(Request $request): RedirectResponse
    {
        $user = auth()->user();
        
        if (!$user->canManageUsers()) {
            abort(403, 'Unauthorized access.');
        }
        
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'role' => ['required', 'in:student,teacher'],
            'birthdate' => ['required', 'date', 'before:today'],
            'phone' => ['nullable', 'string', 'max:20'],
            'grade' => ['nullable', 'string', 'max:50'],
        ]);
        
        // Generate student ID for students
        if ($validated['role'] === 'student') {
            $validated['student_id'] = User::generateStudentId();
        } else {
            // Generate employee ID for teachers (simple increment)
            $lastEmployee = User::where('employee_id', '!=', null)
                               ->orderBy('employee_id', 'desc')
                               ->first();
            $nextId = $lastEmployee ? ((int) $lastEmployee->employee_id) + 1 : 1000;
            $validated['employee_id'] = (string) $nextId;
        }
        
        // Create user with default password from birthdate
        $newUser = User::create([
            ...$validated,
            'password' => Hash::make(date('mdY', strtotime($validated['birthdate']))),
            'force_password_change' => true,
            'email_verified_at' => null, // Require email verification
        ]);
        
        // Send custom welcome email verification
        $newUser->sendEmailVerificationNotification();
        
        return Redirect::route('user-management.index')
                       ->with('message', 'User created successfully. Verification email sent to ' . $newUser->email . '. Default password: ' . date('mdY', strtotime($validated['birthdate'])));
    }
    
    /**
     * Show user edit form
     */
    public function edit(User $user): Response
    {
        $currentUser = auth()->user();
        
        if (!$currentUser->canManageUsers()) {
            abort(403, 'Unauthorized access.');
        }
        
        // Prevent editing admin users unless current user is admin
        if ($user->role === 'admin' && $currentUser->role !== 'admin') {
            abort(403, 'Cannot edit admin users.');
        }
        
        return Inertia::render('UserManagement/Edit', [
            'user' => $user
        ]);
    }
    
    /**
     * Update user
     */
    public function update(Request $request, User $user): RedirectResponse
    {
        $currentUser = auth()->user();
        
        if (!$currentUser->canManageUsers()) {
            abort(403, 'Unauthorized access.');
        }
        
        // Prevent editing admin users unless current user is admin
        if ($user->role === 'admin' && $currentUser->role !== 'admin') {
            abort(403, 'Cannot edit admin users.');
        }
        
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'phone' => ['nullable', 'string', 'max:20'],
            'grade' => ['nullable', 'string', 'max:50'],
            'birthdate' => ['nullable', 'date', 'before:today'],
        ]);
        
        $user->update($validated);
        
        return Redirect::route('user-management.index')
                       ->with('message', 'User updated successfully.');
    }
    
    /**
     * Reset user password to birthdate
     */
    public function resetPassword(User $user): RedirectResponse
    {
        $currentUser = auth()->user();
        
        if (!$currentUser->canManageUsers()) {
            abort(403, 'Unauthorized access.');
        }
        
        if (!$user->birthdate) {
            return Redirect::back()->withErrors(['error' => 'Cannot reset password: no birthdate set.']);
        }
        
        $newPassword = $user->generateDefaultPassword();
        $user->update([
            'password' => Hash::make($newPassword),
            'force_password_change' => true,
            'last_password_change' => now(),
        ]);
        
        return Redirect::back()
                       ->with('message', "Password reset successfully. New password: {$newPassword}");
    }
    
    /**
     * Delete user
     */
    public function destroy(User $user): RedirectResponse
    {
        $currentUser = auth()->user();
        
        if (!$currentUser->canManageUsers()) {
            abort(403, 'Unauthorized access.');
        }
        
        // Prevent deleting admin users unless current user is admin
        if ($user->role === 'admin' && $currentUser->role !== 'admin') {
            abort(403, 'Cannot delete admin users.');
        }
        
        // Prevent self-deletion
        if ($user->id === $currentUser->id) {
            return Redirect::back()->withErrors(['error' => 'Cannot delete your own account.']);
        }
        
        $user->delete();
        
        return Redirect::route('user-management.index')
                       ->with('message', 'User deleted successfully.');
    }
}
