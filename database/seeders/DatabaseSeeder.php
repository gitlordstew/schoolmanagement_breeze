<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create the main admin account
        User::firstOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'System Administrator',
                'email' => 'admin@admin.com',
                'password' => \Illuminate\Support\Facades\Hash::make('admin123'),
                'role' => 'admin',
                'email_verified_at' => now(),
                'force_password_change' => false, // Admin can use default password
                'employee_id' => '1000',
            ]
        );

        // Optional: Create some sample users for testing
        // Uncomment the lines below if you want sample data
        
        /*
        // Sample HR user
        User::firstOrCreate(
            ['email' => 'hr@school.com'],
            [
                'name' => 'HR Manager',
                'email' => 'hr@school.com',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'role' => 'hr',
                'email_verified_at' => now(),
                'force_password_change' => true,
                'employee_id' => '1001',
            ]
        );

        // Sample Teacher
        User::firstOrCreate(
            ['email' => 'teacher@school.com'],
            [
                'name' => 'John Teacher',
                'email' => 'teacher@school.com',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'role' => 'teacher',
                'email_verified_at' => now(),
                'force_password_change' => true,
                'employee_id' => '1002',
                'birthdate' => '1985-06-15',
            ]
        );

        // Sample Student
        User::firstOrCreate(
            ['email' => 'student@school.com'],
            [
                'name' => 'Jane Student',
                'email' => 'student@school.com',
                'password' => \Illuminate\Support\Facades\Hash::make('06151990'), // birthdate format
                'role' => 'student',
                'email_verified_at' => now(),
                'force_password_change' => true,
                'student_id' => User::generateStudentId(),
                'birthdate' => '1990-06-15',
                'grade' => 'Grade 12',
            ]
        );
        */
    }
}
