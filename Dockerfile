FROM node:10

ENV NODE_ENV=dev

RUN npm i -g nodemon  @babel/core @babel/cli
RUN mkdir /backend
ADD package.json /backend/package.json

WORKDIR /backend
RUN npm install

ADD . ./

EXPOSE 8000

CMD ["npm", "start"]
