# Image
FROM php:7.4-fpm

# Starting from scratch
RUN apt-get clean
RUN apt-get -y autoremove
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# PS
RUN apt-get update && apt-get install -y procps

# Dependencies
RUN apt-get update

# Zip
RUN apt-get install -y libzip-dev zip && docker-php-ext-configure zip && docker-php-ext-install zip

# Git
RUN apt-get install -y git

# NANO
RUN apt-get install -y nano

# Curl
RUN apt-get install -y libcurl3-dev curl && docker-php-ext-install curl

# HTOP
RUN apt-get install -y htop

# GD
RUN apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev
RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/
RUN docker-php-ext-install gd
RUN docker-php-ext-install opcache

# ImageMagick
RUN apt-get install -y imagemagick && apt-get install -y --no-install-recommends libmagickwand-dev
RUN pecl install imagick && docker-php-ext-enable imagick

# PostgreSQL
RUN apt-get install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql

# BC Math
RUN docker-php-ext-install bcmath

# Human Language and Character Encoding Support
RUN apt-get install -y zlib1g-dev libicu-dev g++
RUN docker-php-ext-configure intl
RUN docker-php-ext-install intl

# PHP Other extensions
RUN docker-php-ext-install exif && docker-php-ext-enable exif

# PHP Redis extension
RUN pecl install redis
RUN docker-php-ext-enable redis

# Composer installation
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer
RUN chmod 0755 /usr/bin/composer

RUN composer global require phpunit/phpunit
RUN export PATH=~/.composer/vendor/bin:$PATH

# GMP
RUN apt-get install -y libgmp-dev re2c libmhash-dev libmcrypt-dev file
RUN ln -s /usr/include/x86_64-linux-gnu/gmp.h /usr/local/include/
RUN docker-php-ext-configure gmp
RUN docker-php-ext-install gmp

# Custom php.ini config
COPY php.ini /usr/local/etc/php/php.ini
COPY opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY www.conf /usr/local/etc/php-fpm.d/www.conf

# Clean up
RUN apt-get clean
RUN apt-get -y autoremove
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Rights
RUN chown -R www-data:www-data /var/www

# Set up default directory

WORKDIR /var/www
