# React-Node Boilerplate by Jega
Tool used to store all useful knowledge about programing.

# Start docker-compose:
docker-compose up -d --build

> Please increase http request amount of time, if there is a message regarding "Read timed out"
> * export DOCKER_CLIENT_TIMEOUT=120
> * export COMPOSE_HTTP_TIMEOUT=12


# Test client docker file

  - Build: `docker build -t repo-studio_client .`
  - Run: `docker run -it \
          -v ${PWD}:/usr/app \
          -v /usr/app/node_modules \
          -p 3000:3000 \
          --rm \
          repo-studio_client`

# Upgrading react to latest version
npm install --save react@latest
npm install --save react-scripts@latest