@echo off
REM Complete MySQL Setup Script

echo 🗄️ Completing MySQL Setup...

REM Add MySQL to PATH permanently
echo Adding MySQL to system PATH...
setx PATH "%PATH%;C:\Program Files\MySQL\MySQL Server 8.4\bin" /M

echo 📋 MySQL Installation Complete!
echo.
echo Next steps:
echo 1. Restart your terminal/VS Code to refresh PATH
echo 2. Configure MySQL root password using MySQL Installer
echo 3. Create the database:
echo    mysql -u root -p -e "CREATE DATABASE schoolms_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
echo.
echo Or use the MySQL Workbench to manage your databases graphically.
echo.
echo 🔧 Alternative: Use Docker MySQL (easier)
echo    1. Start Docker Desktop
echo    2. Run: docker-compose -f docker-compose.dev.yml up -d database
echo    3. Database will be available at localhost:3306

pause