<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the main admin user with specified credentials
        User::updateOrCreate(
            ['email' => 'admin@admin.com'], // Check if email exists
            [
                'name' => 'adminMain',
                'email' => 'admin@admin.com',
                'email_verified_at' => now(),
                'password' => Hash::make('backdoor'),
                'role' => 'admin',
                'phone' => '+1234567000',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );

        $this->command->info('Admin user created successfully!');
        $this->command->info('Email: admin@admin.com');
        $this->command->info('Password: backdoor');
        $this->command->info('Role: admin');
    }
}