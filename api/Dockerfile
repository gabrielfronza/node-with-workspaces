FROM node:18.3.0-buster-slim

# We only copy the dependencies we need
WORKDIR /project
COPY libs/package_a libs/package_a
COPY libs/package_b libs/package_b

RUN apt-get update && apt-get install -y ca-certificates

ENV HOME=/home/app

COPY api/package.json api/yarn.lock $HOME/node_docker/

WORKDIR $HOME/node_docker

RUN yarn

COPY . $HOME/node_docker

ARG DOCKER_ENV

ENV NODE_ENV=${DOCKER_ENV}

EXPOSE 3751

CMD node api/index.js