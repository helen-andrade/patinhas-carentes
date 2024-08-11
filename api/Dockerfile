FROM node:16-alpine AS development

WORKDIR /app

COPY package.json .

RUN npm install

COPY src .
COPY .env .
COPY tsconfig.json .

EXPOSE 4000

CMD ["npm", "run", "dev"]
