<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class VerifyEmailController extends Controller
{
    /**
     * Show the verification form with password setup.
     */
    public function __invoke(Request $request): RedirectResponse|Response
    {
        // Find user by ID from the URL
        $user = User::findOrFail($request->route('id'));
        
        // Verify the hash matches
        if (! hash_equals((string) $request->route('hash'), sha1($user->getEmailForVerification()))) {
            return redirect()->route('login')->with('error', 'Invalid verification link.');
        }
        
        // Check if link has expired
        if (! $request->hasValidSignature()) {
            return redirect()->route('login')->with('error', 'Verification link has expired.');
        }
        
        // If already verified and password is set, redirect to dashboard
        if ($user->hasVerifiedEmail() && !$user->force_password_change) {
            Auth::login($user);
            return redirect()->route('dashboard')->with('status', 'Welcome back! Your account is already set up.');
        }

        // Show the password setup form
        return Inertia::render('Auth/VerifyEmailWithPassword', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'school_id' => $user->school_id ?? $user->student_id ?? $user->employee_id,
                'grade' => $user->grade,
                'phone' => $user->phone,
            ],
            'verification_id' => $request->route('id'),
            'verification_hash' => $request->route('hash'),
        ]);
    }

    /**
     * Handle password setup and email verification.
     */
    public function verifyWithPassword(Request $request): RedirectResponse
    {
        $request->validate([
            'verification_id' => 'required|exists:users,id',
            'verification_hash' => 'required|string',
            'current_password' => 'nullable|string',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'verification_id' => 'required',
            'verification_hash' => 'required',
        ]);

        // Find user by ID
        $user = User::findOrFail($request->verification_id);
        
        // Verify the hash matches
        if (! hash_equals($request->verification_hash, sha1($user->getEmailForVerification()))) {
            return back()->withErrors(['verification_hash' => 'Invalid verification link.']);
        }

        // If current password is provided, verify it
        if ($request->current_password && !Hash::check($request->current_password, $user->password)) {
            return back()->withErrors(['current_password' => 'The current password is incorrect.']);
        }

        // Update password
        $user->update([
            'password' => Hash::make($request->password),
            'force_password_change' => false,
            'last_password_change' => now(),
        ]);

        // Mark email as verified
        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
            event(new Verified($user));
        }

        // Log the user in
        Auth::login($user);

        return redirect()->route('dashboard')->with('status', 'Welcome to EduPortal! Your account has been successfully set up and verified.');
    }
}
