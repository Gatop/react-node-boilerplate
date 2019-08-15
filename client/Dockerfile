# Setup and build the client

FROM node:12-alpine

WORKDIR /usr/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install -qy
RUN npm install node-sass@latest

COPY ./ ./

# start app
CMD ["npm", "start"]