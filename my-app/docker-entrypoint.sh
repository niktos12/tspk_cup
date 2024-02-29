#!/bin/sh

for file in /usr/share/nginx/html/*.html /usr/share/nginx/html/static/js/*.js;
do
  envsubst '${REACT_APP_BACKEND_URL}' < "$file" > "$file.tmp"
  mv "$file.tmp" "$file"
done

envsubst '${REACT_APP_BACKEND_URL}' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"