FROM node:lts-alpine

WORKDIR /koala

COPY package*.json ./

RUN npm install --production

COPY src ./src

RUN tsc

ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT [ "node", "dist/index.js"]
