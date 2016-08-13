FROM node:4.4.7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY gulpfile.js /usr/src/app/
COPY tsconfig.json /usr/src/app/
RUN npm run build
COPY . /usr/src/app

CMD [ "npm", "start" ]
EXPOSE 3000
