# Using a compact OS
FROM daocloud.io/nginx:1.11-alpine

RUN apk --update add curl

EXPOSE 80

HEALTHCHECK CMD curl --fail http://localhost:80/ || exit 1

# Start Nginx and keep it running background and start php
CMD sed -i "s/ContainerID: /ContainerID: "$(hostname)"/g" /usr/share/nginx/html/index.html && nginx -g "daemon off;"

LABEL maintainer="Kay Yan" \
      io.daocloud.dce.plugin.name="dce-2048-plugin" \
      io.daocloud.dce.plugin.description="2048是一款数字益智游戏，相同数字的方块合并在一起时会相加。" \
      io.daocloud.dce.plugin.categories="game" \
      io.daocloud.dce.plugin.vendor="DaoCloud" \
      io.daocloud.dce.plugin.required-dce-version=">=3.0.0" \
      io.daocloud.dce.plugin.nano-cpus-limit="500000000" \
      io.daocloud.dce.plugin.memory-bytes-limit="52428800"

# Add 2048 stuff into Nginx server
COPY . /usr/share/nginx/html
