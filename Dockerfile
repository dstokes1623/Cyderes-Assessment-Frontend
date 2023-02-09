FROM node:14

WORKDIR /frontend

COPY package.json /frontend/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]