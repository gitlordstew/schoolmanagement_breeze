<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'phone',
        'grade',
        'student_id',
        'employee_id',
        'birthdate',
        'force_password_change',
        'last_password_change',
        'profile_picture',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'birthdate' => 'date',
        'force_password_change' => 'boolean',
        'last_password_change' => 'datetime',
    ];
    
    /**
     * Check if user can manage other users (admin, moderator, hr, registrar)
     */
    public function canManageUsers(): bool
    {
        return in_array($this->role, ['admin', 'moderator', 'hr', 'registrar']);
    }
    
    /**
     * Generate next student ID based on current year and month
     */
    public static function generateStudentId(): string
    {
        $yearMonth = now()->format('Ym'); // e.g., 202510
        
        // Find the highest student ID for current year/month
        $lastStudent = self::where('student_id', 'LIKE', $yearMonth . '%')
                          ->orderBy('student_id', 'desc')
                          ->first();
        
        if ($lastStudent) {
            $lastNumber = (int) substr($lastStudent->student_id, 6); // Get last 3 digits
            $nextNumber = $lastNumber + 1;
        } else {
            $nextNumber = 1;
        }
        
        return $yearMonth . str_pad($nextNumber, 3, '0', STR_PAD_LEFT);
    }
    
    /**
     * Generate default password from birthdate (MMDDYYYY format)
     */
    public function generateDefaultPassword(): string
    {
        if (!$this->birthdate) {
            return 'password123'; // Fallback
        }
        
        return $this->birthdate->format('mdY'); // e.g., 10222002
    }
    
    /**
     * Check if user needs to change password
     */
    public function needsPasswordChange(): bool
    {
        return $this->force_password_change;
    }

    /**
     * Send the email verification notification.
     */
    public function sendEmailVerificationNotification(): void
    {
        $this->notify(new \App\Notifications\CustomVerifyEmail());
    }
}
