FROM node:lts-alpine

WORKDIR /koala

COPY package*.json ./

RUN npm install --production

COPY *.js ./

EXPOSE 3000

ENTRYPOINT [ "npm", "start"]
