FROM nginx:alpine3.21

WORKDIR /usr/share/nginx/html

COPY ./dist .

COPY .ask/config/front-end/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
