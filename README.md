# React-Node boilerplate by Jega
Tool used to store all useful knowledge about programing.

# Start docker-compose:
* ```docker-compose up -d --build```
* ```sudo docker run -it react-node-boilerplate_client /bin/sh```

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

# To launch unit testing
> Liraries:
> * https://github.com/testing-library/jest-dom
> * https://github.com/testing-library/react-testing-library
> * ``` Test: `npm test` ```

# Sass linters
> * https://github.com/sasstools/sass-lint
> - Native task: ```./node_modules/.bin/sass-lint 'src/**/*.scss' -v -q```
> - npx task: ```npx sass-lint 'src/**/*.scss' -v -q```
> - npm script: ```npm run lintjs```
> - Gulp task: ```gulp sass-lint``` or ```gulp watch```

# ES linters
> * https://github.com/eslint/eslint
> - Native task: ```./node_modules/.bin/eslint src --ext .js```
> - npx task: ```npx eslint src --ext .js```
> - npm script: ```npm run lintjs```
> - Gulp task: ```gulp eslint``` or ```gulp watch```

# Libraries
> * gridlex: https://gridlex.devlint.fr/

# References
> * Sass Datatypes: https://www.tutorialsteacher.com/sass/sass-data-types