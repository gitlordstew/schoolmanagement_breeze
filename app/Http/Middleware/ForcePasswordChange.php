<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ForcePasswordChange
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();
        
        // Skip if user is not authenticated
        if (!$user) {
            return $next($request);
        }
        
        // Skip if user doesn't need to change password
        if (!$user->force_password_change) {
            return $next($request);
        }
        
        // Allow access to password change routes and logout
        $allowedRoutes = [
            'password.update',
            'profile.edit',
            'profile.update',
            'logout',
        ];
        
        if (in_array($request->route()->getName(), $allowedRoutes)) {
            return $next($request);
        }
        
        // Redirect to profile edit page with password change requirement
        return Redirect::route('profile.edit')
                       ->with('status', 'You must change your password before accessing the system.');
    }
}