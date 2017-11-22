FROM node:argon

RUN mkdir /db_app
WORKDIR /db_app

COPY package.json /db_app

RUN npm install

COPY . /db_app

EXPOSE 3000

CMD ["npm", "start"]
