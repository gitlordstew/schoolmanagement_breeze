<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // First, change role column to varchar temporarily to avoid enum constraint issues
        Schema::table('users', function (Blueprint $table) {
            $table->string('role', 20)->change();
        });
        
        // Update existing parent users to hr role
        DB::table('users')->where('role', 'parent')->update(['role' => 'hr']);
        
        // Add new fields
        Schema::table('users', function (Blueprint $table) {
            $table->date('birthdate')->nullable()->after('email_verified_at');
            $table->boolean('force_password_change')->default(false)->after('birthdate');
            $table->string('employee_id')->nullable()->after('student_id'); // For teachers/staff
            $table->timestamp('last_password_change')->nullable()->after('force_password_change');
        });
        
        // Now change back to enum with new values
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['student', 'teacher', 'admin', 'moderator', 'hr', 'registrar'])
                  ->default('student')
                  ->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Revert role enum back to original
            $table->enum('role', ['student', 'parent', 'teacher', 'admin', 'moderator'])
                  ->default('student')
                  ->change();
            
            // Remove new fields
            $table->dropColumn([
                'birthdate',
                'force_password_change', 
                'employee_id',
                'last_password_change'
            ]);
        });
    }
};
