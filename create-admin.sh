#!/usr/bin/env bash

GREEN='\033[0;32m'
RED='\033[0;31m'

docker exec -i seniorcare_php bash -c "php artisan user:create"
