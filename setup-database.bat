@echo off
REM Database Setup Script for School Management System

echo 🗄️ Setting up MySQL Database for School Management System...

REM Check if MySQL is running
echo Checking MySQL connection...

REM Create database using MySQL command line
echo Creating schoolms_db database...
mysql -u root -p -e "DROP DATABASE IF EXISTS schoolms_db; CREATE DATABASE schoolms_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Database 'schoolms_db' created successfully!
) else (
    echo ❌ Failed to create database. Please ensure MySQL is running and you have proper privileges.
    echo Make sure to:
    echo   1. Install MySQL Server
    echo   2. Start MySQL service  
    echo   3. Run this script with proper MySQL root credentials
    pause
    exit /b 1
)

echo.
echo 📋 Database Details:
echo   Database Name: schoolms_db
echo   Character Set: utf8mb4
echo   Collation: utf8mb4_unicode_ci
echo.
echo Next steps:
echo   1. Update your .env file with database credentials
echo   2. Run: php artisan migrate
echo   3. Run: php artisan db:seed (if you have seeders)

pause