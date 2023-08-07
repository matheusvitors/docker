FROM node:16-alpine

WORKDIR /app

#package*.json vai copiar o package.json e o package-lock.json
COPY package*.json /app

RUN npm install

#copia o projeto para o /app
COPY . /app

EXPOSE 8000

CMD ["node", "index.js"]