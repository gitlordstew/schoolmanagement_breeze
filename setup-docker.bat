@echo off
REM School Management System Docker Setup Script for Windows

echo 🚀 Setting up School Management System (Laravel React TypeScript) Docker environment...

REM Create Docker .env file
echo 📝 Creating Docker environment file...
copy .env.docker .env

REM Build and start containers
echo 🐳 Building Docker containers...
docker-compose up -d --build

REM Wait for database to be ready
echo ⏳ Waiting for database to be ready...
timeout /t 30 /nobreak >nul

REM Install Composer dependencies
echo 📦 Installing Composer dependencies...
docker-compose exec app composer install

REM Generate Laravel application key
echo 🔑 Generating Laravel application key...
docker-compose exec app php artisan key:generate

REM Run database migrations
echo 🗄️ Running database migrations...
docker-compose exec app php artisan migrate

REM Install Node.js dependencies
echo 📦 Installing Node.js dependencies...
docker-compose exec app npm install --legacy-peer-deps

REM Build frontend TSX assets
echo 🎨 Building React TypeScript assets...
docker-compose exec app npm run build

REM Set proper permissions
echo 🔐 Setting file permissions...
docker-compose exec app chown -R www-data:www-data /var/www/html/storage
docker-compose exec app chown -R www-data:www-data /var/www/html/bootstrap/cache

echo ✅ School Management System setup complete!
echo 🌐 Your application is available at: http://localhost
echo 🗄️ MySQL Database (schoolms_db) is available at: localhost:3306
echo 🔴 Redis is available at: localhost:6379

echo.
echo Useful commands:
echo   docker-compose up -d        # Start containers
echo   docker-compose down         # Stop containers
echo   docker-compose logs app     # View application logs
echo   docker-compose exec app bash # Access application container

pause