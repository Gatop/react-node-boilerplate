# Setup and build the client

FROM node:9.4.0-alpine

WORKDIR /usr/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install -qy

COPY ./ ./

# start app
CMD ["npm", "run", "dev"]
#CMD ["npm", "start"]