FROM node:12-alpine

RUN set -eux; \
    mkdir -p /opt/taltech-donald-frontend

WORKDIR /opt/taltech-donald-frontend/

COPY package.json package-lock.json ./
RUN npm install
COPY . .
COPY ./docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["/opt/taltech-donald-frontend/docker-entrypoint.sh"]

