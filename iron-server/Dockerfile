FROM node

WORKDIR /appBackend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 7070

CMD ["npm", "start"]