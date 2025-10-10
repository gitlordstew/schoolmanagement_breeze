# Laravel React TypeScript Docker Configuration

This project provides a complete Docker setup for a Laravel application with React TypeScript frontend.

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed
- Docker Compose v2+

### Setup for Development

1. **Clone your Laravel React TypeScript project** into this directory
2. **Run the setup script:**
   
   **Windows:**
   ```powershell
   .\setup-docker.bat
   ```
   
   **Linux/Mac:**
   ```bash
   chmod +x setup-docker.sh
   ./setup-docker.sh
   ```

3. **Manual .env configuration (if needed):**
   Update your `.env` file with these Docker-specific values:
   ```env
   DB_HOST=database
   DB_DATABASE=laravel_db
   DB_USERNAME=laravel_user
   DB_PASSWORD=laravel_password
   REDIS_HOST=redis
   REDIS_PORT=6379
   ```

### Development vs Production

#### Development Environment
```bash
# Use development compose file with hot reloading
docker-compose -f docker-compose.dev.yml up -d

# Access Vite dev server
http://localhost:5173
```

#### Production Environment
```bash
# Use production compose file
docker-compose up -d

# Access application
http://localhost
```

## 📁 Project Structure

```
├── docker/
│   ├── nginx/
│   │   └── nginx.conf          # Nginx configuration
│   ├── php/
│   │   ├── local.ini           # PHP configuration
│   │   └── xdebug.ini          # Xdebug configuration (dev)
│   ├── mysql/
│   │   └── my.cnf              # MySQL configuration
│   └── supervisord/
│       └── supervisord.conf    # Process supervisor config
├── Dockerfile                  # Production Docker image
├── Dockerfile.dev              # Development Docker image
├── docker-compose.yml          # Production compose
├── docker-compose.dev.yml      # Development compose
└── .dockerignore              # Docker ignore file
```

## 🛠️ Available Services

| Service | Port | Description |
|---------|------|-------------|
| **nginx** | 80 | Web server (production) |
| **nginx** | 8080 | Web server (development) |
| **vite** | 5173 | Vite dev server (development only) |
| **database** | 3306 | MySQL database |
| **redis** | 6379 | Redis cache |

## 📋 Common Commands

### Container Management
```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# Rebuild containers
docker-compose up -d --build

# View logs
docker-compose logs -f app
```

### Laravel Commands
```bash
# Access application container
docker-compose exec app bash

# Run Artisan commands
docker-compose exec app php artisan migrate
docker-compose exec app php artisan cache:clear
docker-compose exec app php artisan queue:work

# Install Composer packages
docker-compose exec app composer install
docker-compose exec app composer require package-name
```

### Frontend Development
```bash
# Install npm packages
docker-compose exec app npm install

# Run development build
docker-compose exec app npm run dev

# Run production build
docker-compose exec app npm run build

# Run TypeScript checks
docker-compose exec app npm run type-check
```

### Database Operations
```bash
# Access MySQL directly
docker-compose exec database mysql -u laravel_user -p laravel_db

# Run migrations
docker-compose exec app php artisan migrate

# Seed database
docker-compose exec app php artisan db:seed
```

## 🔧 Configuration Details

### Laravel Configuration
The Docker setup automatically configures Laravel for containerized environment:
- Database connection to `database` service
- Redis connection to `redis` service
- File permissions for storage and cache directories

### React TypeScript Configuration
- Vite configuration for development hot reloading
- TypeScript compilation and type checking
- Asset building and optimization for production

### Nginx Configuration
- Serves Laravel public directory
- Handles PHP-FPM requests
- Static asset caching
- SPA routing support for React

## 🐛 Debugging

### Xdebug (Development)
Xdebug is configured for the development environment:
- **Host:** `host.docker.internal`
- **Port:** `9003`
- **IDE Key:** `VSCODE`

### Viewing Logs
```bash
# Application logs
docker-compose logs -f app

# Nginx logs
docker-compose logs -f nginx

# Database logs
docker-compose logs -f database
```

## 🚀 Production Deployment

1. **Build production image:**
   ```bash
   docker build -t your-app-name .
   ```

2. **Use production compose:**
   ```bash
   docker-compose up -d
   ```

3. **Environment variables:**
   Ensure production `.env` file has appropriate values for:
   - `APP_ENV=production`
   - `APP_DEBUG=false`
   - Database credentials
   - Cache and session drivers

## 📝 Customization

### Adding PHP Extensions
Edit the `Dockerfile` and add extensions:
```dockerfile
RUN docker-php-ext-install extension_name
```

### Custom Nginx Configuration
Modify `docker/nginx/nginx.conf` for custom routing or SSL setup.

### Database Configuration
Update `docker/mysql/my.cnf` for custom MySQL settings.

## 🔒 Security Notes

- Change default database passwords in production
- Use environment-specific `.env` files
- Configure SSL/TLS for production
- Set up proper firewall rules
- Use secrets management for sensitive data

## 📚 Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)