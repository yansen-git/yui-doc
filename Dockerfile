FROM nginx:1.15
COPY dist /etc/nginx/html/yui
COPY conf /etc/nginx/conf.d