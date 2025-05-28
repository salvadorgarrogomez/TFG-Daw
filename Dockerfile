### Etapa 1: Construcción de frontend (cljs + tailwind)
FROM node:18-bullseye AS frontend

WORKDIR /app

# Instala Java (mínimo Java 11 para shadow-cljs)
RUN apt-get update && apt-get install -y openjdk-17-jdk

COPY package.json package-lock.json* ./
COPY shadow-cljs.edn ./
COPY vite.config.js ./
COPY frontend ./frontend
COPY resources ./resources

RUN npm install

# ⬅️ Instala el compilador SASS (necesario para "npm run build:css")
RUN npm install --save-dev sass

# Crea el directorio donde se generará el CSS
RUN mkdir -p public/css

# Compila CSS desde SCSS
RUN npm run build:css

# Compila JS desde CLJS
RUN npx shadow-cljs release app


### Etapa 2: App Laravel
FROM php:8.2-apache

# Instala extensiones necesarias
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git curl libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Habilita mod_rewrite
RUN a2enmod rewrite

# Instala Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/laravel

# Copia todo el backend Laravel
COPY . /var/www/laravel

# Copia JS y CSS ya compilados
COPY --from=frontend /app/public/js ./public/js
COPY --from=frontend /app/public/css ./public/css

# Instala dependencias PHP
RUN composer install --no-dev --optimize-autoloader \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Configura Apache
COPY ./vhost.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 8000
CMD ["apache2-foreground"]
