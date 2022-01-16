FROM nginx:1.15
COPY docs/.vuepress/dist /etc/nginx/html/yui
COPY conf /etc/nginx/conf.d