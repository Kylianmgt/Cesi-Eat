FROM node:current-alpine3.16

# ENV NODE_VERSION 18.4.0
RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile --production

COPY --chown=node:node . .

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]