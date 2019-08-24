# Setup and build the client
FROM node:12.8.1-alpine

WORKDIR /usr/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install -qy

COPY ./ ./

# start app
CMD ["npm", "start"]