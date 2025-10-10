@echo off
REM Development helper script for School Management System

echo 🛠️ School Management System - Development Helper

echo.
echo Choose your development mode:
echo 1. Build assets for production (recommended for stability)
echo 2. Start Vite dev server (hot reload, but may have issues)
echo 3. View application status
echo 4. View logs
echo 5. Restart all services

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo 🔨 Building production assets...
    docker-compose exec app npm run build
    docker-compose exec app php artisan cache:clear
    echo ✅ Assets built! Visit: http://localhost:8080
    echo.
)

if "%choice%"=="2" (
    echo 🔥 Starting Vite dev server...
    echo NOTE: Assets will be served from http://localhost:5173
    echo Make sure to update your .env file with: VITE_DEV_SERVER_URL=http://localhost:5173
    docker-compose -f docker-compose.dev.yml up -d vite
    echo ✅ Vite dev server started! Visit: http://localhost:8080
    echo.
)

if "%choice%"=="3" (
    echo 📊 Application Status:
    docker-compose -f docker-compose.dev.yml ps
    echo.
    echo 🌐 Application URLs:
    echo   - Main App: http://localhost:8080
    echo   - Vite Dev: http://localhost:5173
    echo   - Database: localhost:3306
    echo   - Redis: localhost:6379
    echo.
)

if "%choice%"=="4" (
    echo 📋 Choose logs to view:
    echo 1. Laravel App logs
    echo 2. Nginx logs
    echo 3. Vite logs
    echo 4. Database logs
    
    set /p log_choice="Enter choice (1-4): "
    
    if "!log_choice!"=="1" docker logs --tail 20 schoolmanagement-app-dev
    if "!log_choice!"=="2" docker logs --tail 20 schoolmanagement-nginx-dev
    if "!log_choice!"=="3" docker logs --tail 20 schoolmanagement-vite  
    if "!log_choice!"=="4" docker logs --tail 20 schoolmanagement-mysql-dev
    echo.
)

if "%choice%"=="5" (
    echo 🔄 Restarting all services...
    docker-compose -f docker-compose.dev.yml restart
    echo ✅ All services restarted!
)

echo.
echo 💡 Useful commands:
echo   - Build assets: docker-compose exec app npm run build
echo   - Clear cache: docker-compose exec app php artisan cache:clear
echo   - View routes: docker-compose exec app php artisan route:list
echo   - Access DB: docker-compose exec database mysql -u schoolms_user -p schoolms_db

pause