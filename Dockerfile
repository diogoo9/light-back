FROM node:22-bullseye

WORKDIR /user/local/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY .env.docker ./.env

RUN npm run build 

CMD [ "npm","run", "start" ]

EXPOSE 3000
