# Image
FROM nginx:1.17-alpine

# Add config
COPY ./services/*.conf /etc/nginx/conf.d/
#COPY nginx.conf /etc/nginx/
RUN rm /etc/nginx/conf.d/default.conf

COPY ./ssl/*.crt /etc/nginx/ssl/
COPY ./ssl/*.key /etc/nginx/ssl/

