#!/bin/bash

# Laravel React TypeScript Docker Setup Script

echo "🚀 Setting up Laravel React TypeScript Docker environment..."

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    
    # Update database configuration for Docker
    sed -i 's/DB_HOST=127.0.0.1/DB_HOST=database/' .env
    sed -i 's/DB_DATABASE=laravel/DB_DATABASE=laravel_db/' .env
    sed -i 's/DB_USERNAME=root/DB_USERNAME=laravel_user/' .env
    sed -i 's/DB_PASSWORD=/DB_PASSWORD=laravel_password/' .env
    
    # Update Redis configuration
    sed -i 's/REDIS_HOST=127.0.0.1/REDIS_HOST=redis/' .env
fi

# Build and start containers
echo "🐳 Building Docker containers..."
docker-compose up -d --build

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 30

# Install Composer dependencies
echo "📦 Installing Composer dependencies..."
docker-compose exec app composer install

# Generate Laravel application key
echo "🔑 Generating Laravel application key..."
docker-compose exec app php artisan key:generate

# Run database migrations
echo "🗄️ Running database migrations..."
docker-compose exec app php artisan migrate

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
docker-compose exec app npm install

# Build frontend assets
echo "🎨 Building frontend assets..."
docker-compose exec app npm run build

# Set proper permissions
echo "🔐 Setting file permissions..."
docker-compose exec app chown -R www-data:www-data /var/www/html/storage
docker-compose exec app chown -R www-data:www-data /var/www/html/bootstrap/cache

echo "✅ Setup complete!"
echo "🌐 Your application is available at: http://localhost"
echo "🗄️ Database is available at: localhost:3306"
echo "🔴 Redis is available at: localhost:6379"

echo ""
echo "Useful commands:"
echo "  docker-compose up -d        # Start containers"
echo "  docker-compose down         # Stop containers"
echo "  docker-compose logs app     # View application logs"
echo "  docker-compose exec app bash # Access application container"