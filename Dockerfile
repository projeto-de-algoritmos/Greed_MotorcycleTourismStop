FROM node:lts-alpine3.15

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "dev", "--host"]
