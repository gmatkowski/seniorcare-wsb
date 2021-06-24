#!/usr/bin/env bash

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

if [ ! -f ./.env ] && [ -f ./.env.dev ];
then
    cp ./.env.dev ./.env
fi

docker-compose build && docker-compose up -d

if [ -f ./composer.json ];
then
    docker exec -i seniorcare_php bash -c "composer install && php artisan migrate --seed"
fi

cp git-hooks/pre-commit .git/hooks/pre-commit

if [ $? -ne 0 ]
then
    printf "${RED}Dockerized ! Something wrong happen, check output! :-("
else
    printf "${GREEN}Dockerized ! You can now start hacking! :-)"
fi
