# React-Node boilerplate by Jega
Tool used to store all useful knowledge about programing.

# Start docker-compose:
docker-compose up -d --build

> Please increase http request amount of time, if there is a message regarding "Read timed out"
> * export DOCKER_CLIENT_TIMEOUT=120
> * export COMPOSE_HTTP_TIMEOUT=12


# Test client docker file

  - Build: `docker build -t react-node-boilerplate_client .`
  - Run: `docker run -it \
          -v ${PWD}:/usr/app \
          -v /usr/app/node_modules \
          -p 3000:3000 \
          --rm \
          react-node-boilerplate_client`

# Upgrading react to latest version
```
npm install --save react@latest
npm install --save react-dom@latest
npm install --save react-scripts@latest
```
