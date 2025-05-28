### Etapa 1: Construcción frontend
FROM node:18-bullseye AS frontend

WORKDIR /app

RUN apt-get update && apt-get install -y openjdk-17-jdk

COPY package.json package-lock.json* ./
COPY shadow-cljs.edn ./
COPY vite.config.js ./
COPY frontend ./frontend
COPY resources ./resources

RUN npm install
RUN npm install --save-dev sass
RUN mkdir -p public/css
RUN npm run build:css
RUN npx shadow-cljs release app

### Etapa 2: Laravel + Apache
FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git curl libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql zip

RUN a2enmod rewrite

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . /var/www/html

COPY --from=frontend /app/public/js ./public/js
COPY --from=frontend /app/public/css ./public/css

RUN composer install --no-dev --optimize-autoloader \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

RUN mkdir -p /var/www/html/storage/logs /var/www/html/bootstrap/cache

# Permisos para storage y cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

COPY ./vhost.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80

CMD bash -c "cat /var/www/html/storage/logs/laravel.log || echo 'No log file yet'; apache2-foreground"