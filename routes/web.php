<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => false, // Registration disabled
    ]);
});

// Test email route (remove after testing)
// Test route removed - email verification working correctly

Route::get('/news', function () {
    return Inertia::render('News', [
        'canLogin' => Route::has('login'),
        'canRegister' => false, // Registration disabled
    ]);
})->name('news');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::put('/profile/password', [ProfileController::class, 'updatePassword'])->name('password.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Separate profile update endpoints
    Route::post('/profile/picture', [\App\Http\Controllers\UserProfileController::class, 'updateProfilePicture'])->name('profile.update.picture');
    Route::patch('/profile/basic', [\App\Http\Controllers\UserProfileController::class, 'updateBasicInfo'])->name('profile.update.basic');
    Route::patch('/profile/additional', [\App\Http\Controllers\UserProfileController::class, 'updateAdditionalInfo'])->name('profile.update.additional');
    
    // User Management Routes (Admin/Moderator/HR only)
    Route::resource('user-management', \App\Http\Controllers\UserManagementController::class)
        ->except(['show']);
    Route::post('/user-management/{user}/reset-password', [\App\Http\Controllers\UserManagementController::class, 'resetPassword'])
        ->name('user-management.reset-password');
});

require __DIR__.'/auth.php';
