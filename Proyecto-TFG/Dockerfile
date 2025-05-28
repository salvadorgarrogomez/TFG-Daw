# Etapa base con PHP, Composer y Node.js
FROM php:8.2-cli

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    git curl unzip zip gnupg \
    libzip-dev zip \
    libpng-dev libonig-dev libxml2-dev \
    libpq-dev \
    nodejs npm

# Instala Composer
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

# Instala Bun (si usas Bun en lugar de npm para parte del frontend)
RUN curl -fsSL https://bun.sh/install | bash && \
    mv /root/.bun/bin/bun /usr/local/bin/bun

# Instala Shadow-CLJS globalmente
RUN npm install -g shadow-cljs

# Define carpeta de trabajo
WORKDIR /app

# Copia todo el proyecto
COPY . .

# Instala dependencias PHP
RUN composer install --no-dev --optimize-autoloader

# Instala dependencias Node
RUN npm install

# Compila frontend
RUN npx shadow-cljs release app

# Da permisos al almacenamiento
RUN chmod -R 777 storage bootstrap/cache

# Expone el puerto de Laravel
EXPOSE 8000

# Comando de inicio
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
