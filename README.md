# SeniorCare

### Requirements:
- Docker or Docker Desktop

### Installation guide:
- Run ./start.sh (git bash or any other console CLI)
- Visit https://seniorcare.test
- Connect into the container (Container guideline below)
- run command: php artisan user:create
- fill questionnaire
- Sing in https://seniorcare.test/admin

If SSL certificats not working simple add them to you certificats DB (./docker/nginx/ssl/seniorcare.test.crt)

### Mailhog (email local service):
- http://localhost:8026/

### Container
- Windows: winpty docker-compose exec seniorcare_php bash
- Linux/MacOS: docker-compose exec seniorcare_php bash
