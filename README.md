# React-Node boilerplate by Jega
This project was created to allow an esay starting point to code a web application based on a Front-End Application(React) and a rest API(Express).

# Client(React):
This is an APP built with **ReactJs**. This project was initialized with [Create React App] by facebook (https://github.com/facebook/create-react-app)

If you want to know how was build please take a look into readme file from client folder.

# Server(Express):
This is an API built with **NodeJs** using **Express Framework**.

If you want to know how was build please take a look into readme file from server folder.

# Running on the same environment:
Docker and docker-compose were used to create a running environment for both projects.

### Run both projects:
```sh
# Using docker-compose
docker-compose up -d --build
```

### Run client:
```sh
sudo docker run -it react-node-boilerplate_client /bin/sh
```

### Testing client docker file

  - Build: `docker build -t react-node-boilerplate_client .`
  - Run: `docker run -it \
          -v ${PWD}:/usr/app \
          -v /usr/app/node_modules \
          -p 3000:3000 \
          --rm \
          react-node-boilerplate_client`

# Troubleshooting for docker (ubuntu)

> Please increase http request amount of time, if there is a message regarding "Read timed out"
> * export DOCKER_CLIENT_TIMEOUT=120
> * export COMPOSE_HTTP_TIMEOUT=120
