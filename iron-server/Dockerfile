FROM node

WORKDIR /appBackend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 7000

CMD ["npm", "start"]