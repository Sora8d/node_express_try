FROM node:16.13

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

CMD ["yarn", "run", "start"]