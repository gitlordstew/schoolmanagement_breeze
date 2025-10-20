<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;

class UserProfileController extends Controller
{
    /**
     * Update only the profile picture
     */
    public function updateProfilePicture(Request $request): RedirectResponse
    {
        $request->validate([
            'profile_picture' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ]);

        $user = $request->user();

        if (!$request->hasFile('profile_picture')) {
            return Redirect::route('profile.edit')->withErrors(['profile_picture' => 'No file was uploaded']);
        }

        $file = $request->file('profile_picture');

        // Delete old profile picture if it exists
        if ($user->profile_picture && Storage::disk('public')->exists('profile_pictures/' . $user->profile_picture)) {
            Storage::disk('public')->delete('profile_pictures/' . $user->profile_picture);
        }

        // Store new profile picture
        $fileName = time() . '_' . $file->getClientOriginalName();
        
        try {
            $path = $file->storeAs('profile_pictures', $fileName, 'public');
            $user->update(['profile_picture' => $fileName]);
        } catch (\Exception $e) {
            return Redirect::route('profile.edit')->withErrors(['profile_picture' => 'Failed to upload file: ' . $e->getMessage()]);
        }

        return Redirect::route('profile.edit')->with('status', 'profile-picture-updated');
    }

    /**
     * Update only basic info (name, email)
     */
    public function updateBasicInfo(Request $request): RedirectResponse
    {
        $user = $request->user();
        
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique('users')->ignore($user->id),
            ],
        ]);

        $user->fill($validatedData);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        return Redirect::route('profile.edit')->with('status', 'basic-info-updated');
    }

    /**
     * Update only additional info (phone, grade, student_id)
     */
    public function updateAdditionalInfo(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'phone' => ['nullable', 'string', 'max:20'],
            'grade' => ['nullable', 'string', 'max:50'],
            'student_id' => ['nullable', 'string', 'max:50'],
        ]);

        $request->user()->update($validatedData);

        return Redirect::route('profile.edit')->with('status', 'additional-info-updated');
    }
}