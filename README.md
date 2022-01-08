# SeniorCare

### Requirements:
- Docker or Docker Desktop

### Installation guide:
- Run ./start.sh (git bash or any other console CLI)
- add seniorcare.test to your hosts
- Visit https://seniorcare.test

#### Create user with Admin role
- Get into the container (Container guideline below)
- run command: php artisan user:create && fill questionnaire

#### Administration panel:
- https://seniorcare.test/admin

#### Web:
- https://seniorcare.test

### Testing
- get into the container
- run ./vendor/bin/phpunit

If SSL certificats not working simple add them to you certificates DB (./docker/nginx/ssl/seniorcare.test.crt)

### Mailhog (email local service):
- http://localhost:8025/

### Container
- Windows: winpty docker-compose exec seniorcare_php bash
- Linux/MacOS: docker-compose exec seniorcare_php bash
