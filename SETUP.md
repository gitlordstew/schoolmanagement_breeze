# 🚀 Laravel React TypeScript Setup Guide

This guide will help you set up a complete development environment using this repository as a starting point for your own projects.

## 📋 Prerequisites

- **Docker Desktop** (recommended)
- **Git**
- **VS Code** (optional but recommended)

## 🔧 Quick Setup (5 minutes)

### 1. Clone & Setup
```bash
# Clone this repository
git clone https://github.com/gitlordstew/LaravelReact_SETUP.git your-project-name

# Navigate to project
cd your-project-name

# Start Docker containers
docker-compose -f docker-compose.dev.yml up -d --build
```

### 2. Install Dependencies & Setup Database
```bash
# Install PHP dependencies
docker-compose exec app composer install

# Install Node dependencies  
docker-compose exec app npm install --legacy-peer-deps

# Setup environment
docker-compose exec app cp .env.docker .env

# Generate app key
docker-compose exec app php artisan key:generate

# Run migrations
docker-compose exec app php artisan migrate

# Build assets
docker-compose exec app npm run build
```

### 3. Access Your Application
- **Main App**: http://localhost:8080
- **Database**: localhost:3306 (user: `schoolms_user`, password: `schoolms_password`)

## 🛠️ Alternative: Local Development Setup

### Prerequisites
- PHP 8.2+
- Node.js 20+
- MySQL 8.0+
- Composer

### Setup Steps
```bash
# Clone repository
git clone https://github.com/gitlordstew/LaravelReact_SETUP.git your-project-name
cd your-project-name

# Install dependencies
composer install
npm install --legacy-peer-deps

# Setup environment
cp .env.example .env
php artisan key:generate

# Setup database (update .env with your MySQL credentials)
php artisan migrate

# Build assets
npm run build

# Start development server
php artisan serve
```

## 📁 Project Structure

```
your-project/
├── app/                     # Laravel application logic
├── resources/js/            # React TypeScript components
│   ├── Components/          # Reusable UI components
│   ├── Layouts/             # Page layouts  
│   ├── Pages/               # Inertia.js pages
│   └── app.tsx              # Main React app
├── docker/                  # Docker configuration
├── database/migrations/     # Database migrations
├── routes/                  # Laravel routes
├── docker-compose.dev.yml   # Development environment
├── docker-compose.yml       # Production environment
└── dev-helper.bat          # Development helper script
```

## 🎯 What's Included

### Backend (Laravel)
- ✅ Laravel 12 with latest features
- ✅ Laravel Breeze authentication
- ✅ Inertia.js for SPA experience
- ✅ API routes ready for mobile apps
- ✅ Database migrations and seeders
- ✅ Redis caching configuration

### Frontend (React + TypeScript)
- ✅ React 18 with TypeScript
- ✅ Tailwind CSS + Headless UI
- ✅ Authentication pages (Login, Register, etc.)
- ✅ Dashboard and profile pages
- ✅ Component library structure
- ✅ Hot module replacement (HMR)

### DevOps & Tools
- ✅ Docker development environment
- ✅ Nginx web server configuration
- ✅ MySQL database with Docker
- ✅ Redis caching
- ✅ Vite for asset compilation
- ✅ Development helper scripts

## 🔄 Development Workflow

### Making Changes
```bash
# For React/TypeScript changes
npm run dev          # Start development server
# OR
npm run build        # Build for production

# For Laravel changes
php artisan cache:clear
php artisan config:clear

# Database changes
php artisan make:migration create_your_table
php artisan migrate
```

### Using Docker Helper
```bash
# Windows
.\dev-helper.bat

# This provides options for:
# 1. Build assets for production
# 2. Start Vite dev server  
# 3. View application status
# 4. View logs
# 5. Restart services
```

## 🗄️ Database Configuration

### Docker (Recommended)
- **Host**: localhost
- **Port**: 3306
- **Database**: schoolms_db  
- **Username**: schoolms_user
- **Password**: schoolms_password

### Local MySQL
Update your `.env` file:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

## 🚀 Customization Guide

### 1. Rename Your Project
```bash
# Update these files:
# - composer.json (name field)
# - package.json (name field)  
# - .env (APP_NAME)
# - README.md
```

### 2. Add Your Features
```bash
# Create models
php artisan make:model YourModel -m

# Create controllers  
php artisan make:controller YourController

# Create React components
# Add to resources/js/Components/

# Create pages
# Add to resources/js/Pages/
```

### 3. Database Design
```bash
# Create migrations
php artisan make:migration create_your_tables

# Create seeders
php artisan make:seeder YourSeeder

# Run migrations and seeds
php artisan migrate --seed
```

## 🔍 Troubleshooting

### Common Issues

**502 Bad Gateway**
```bash
# Restart containers
docker-compose -f docker-compose.dev.yml restart

# Check logs
docker logs schoolmanagement-nginx-dev
docker logs schoolmanagement-app-dev
```

**Assets Not Loading**
```bash
# Build assets
docker-compose exec app npm run build

# Clear cache
docker-compose exec app php artisan cache:clear
```

**Database Connection Issues**
```bash
# Check database container
docker logs schoolmanagement-mysql-dev

# Verify credentials in .env file
```

## 📚 Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Docker Documentation](https://docs.docker.com/)

## 🤝 Contributing

This is a setup repository. Feel free to:
1. Fork for your own projects
2. Submit improvements via PRs
3. Report issues or suggest enhancements

## 📄 License

This setup is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

**Happy coding! 🚀**