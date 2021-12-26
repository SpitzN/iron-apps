FROM node

WORKDIR /appBackend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]