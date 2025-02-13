# Use a imagem oficial do PHP com FPM
FROM php:8.2-fpm

# Instale as dependências necessárias
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libzip-dev \
    libicu-dev \
    && docker-php-ext-install gd mbstring zip pdo pdo_mysql intl

# Instale extensões PHP
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd mbstring zip pdo pdo_mysql

# Instale o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copie os arquivos do projeto
COPY . /var/www

# Configure o diretório de trabalho
WORKDIR /var/www

# Dê permissão para a pasta storage e bootstrap
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Instale as dependências do projeto
RUN composer install

# Copie o arquivo de configuração do PHP
COPY docker/php/php.ini /usr/local/etc/php/conf.d/php.ini

# Exponha a porta para comunicação
EXPOSE 9000

# Comando para iniciar o PHP-FPM
CMD ["php-fpm"]