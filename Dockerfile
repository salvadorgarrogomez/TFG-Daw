### Etapa 1: Construcción de frontend (cljs + tailwind)
FROM node:18 AS frontend

WORKDIR /app

COPY package.json package-lock.json* ./
COPY shadow-cljs.edn ./
COPY vite.config.js ./
COPY frontend ./frontend
COPY resources ./resources

RUN npm install

# ⚠️ Asegúrate de que shadow-cljs y vite están configurados correctamente
RUN npx shadow-cljs release app
RUN npm run build  # Esto ejecutará "vite build", para Tailwind, SCSS o Vite React

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

WORKDIR /var/www/html

# Copia todo el backend Laravel
COPY . .

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
