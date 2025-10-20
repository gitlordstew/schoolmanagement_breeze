<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a verified student user
        User::create([
            'name' => 'John Student',
            'email' => 'student@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'role' => 'student',
            'grade' => '10th Grade',
            'student_id' => 'STU001',
            'phone' => '+1234567890',
        ]);

        // Create a verified parent user
        User::create([
            'name' => 'Jane Parent',
            'email' => 'parent@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'role' => 'parent',
            'phone' => '+1234567891',
        ]);

        // Create a verified teacher user
        User::create([
            'name' => 'Mr. Teacher',
            'email' => 'teacher@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'role' => 'teacher',
            'phone' => '+1234567892',
        ]);

        // Create a verified admin user
        User::create([
            'name' => 'System Administrator',
            'email' => 'admin@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'role' => 'admin',
            'phone' => '+1234567894',
        ]);

        // Create a verified moderator user
        User::create([
            'name' => 'Content Moderator',
            'email' => 'moderator@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'role' => 'moderator',
            'phone' => '+1234567895',
        ]);

        // Create an unverified student to test email verification
        User::create([
            'name' => 'Mary Unverified',
            'email' => 'unverified@example.com',
            'email_verified_at' => null,
            'password' => Hash::make('password'),
            'role' => 'student',
            'grade' => '9th Grade',
            'student_id' => 'STU002',
            'phone' => '+1234567893',
        ]);
    }
}