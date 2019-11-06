# react-node-boilerplate_client
This is an APP built with **ReactJs**. This project was initialized with [Create React App] by facebook (https://github.com/facebook/create-react-app)

## Available Scripts

### Builds for production

``` Build: `npm run build` ```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### Running development mode

``` Run: `npm start` ```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Unit testing

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

``` Test: `npm test` ```

> Libraries:
> * https://github.com/testing-library/jest-dom
> * https://github.com/testing-library/react-testing-library

### Sass linters

> - Native task: ```./node_modules/.bin/sass-lint 'src/**/*.scss' -v -q```
> - npx task: ```npx sass-lint 'src/**/*.scss' -v -q```
> - npm script: ```npm run lintjs```
> - Gulp task: ```gulp sass-lint``` or ```gulp watch```

> Libraries:
> * https://github.com/sasstools/sass-lint

### ES linters

> - Native task: ```./node_modules/.bin/eslint src --ext .js```
> - npx task: ```npx eslint src --ext .js```
> - npm script: ```npm run lintjs```
> - Gulp task: ```gulp eslint``` or ```gulp watch```

> Libraries:
> * https://github.com/eslint/eslint


## Upgrading react to latest version

If an upgrade for react is required, you can launch the following commands. For more info please visit (https://create-react-app.dev/docs/updating-to-new-releases)

```
npm install --save react@latest
npm install --save react-dom@latest
npm install --save react-scripts@latest
```

## Project Description

### Project Structure

```
client
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
└── src
    ├── assets
    │   ├── fonts
    │   └── images
    ├── services
    │   └── http.js
    ├── components
    │   ├── atoms
    │   │   ├── AspectRatio
    │   │   │   ├──AspectRatio.js
    │   │   │   ├──AspectRatio.scss
    │   │   │   └──AspectRatio.test.js
    │   │   ├── Button
    │   │   │   ├──Button.js
    │   │   │   ├──Button.scss
    │   │   │   └──Button.test.js
    │   └── pages
    │       └── Demo
    │           ├──Demo.js
    │           ├──Demo.scss
    │           └──Demo.test.js
    ├── stylesheets
    │   ├── abstracts
    │   │   ├── functions.scss
    │   │   ├── mixins.scss
    │   │   └── mixins.scss
    │   ├── base
    │   │   ├── base.scss
    │   │   ├── fonts.scss
    │   │   └── typography.scss
    │   ├── vendors
    │   │   └── gridlex.scss
    │   └── Main.scss
    ├── index.js
    └── registerServiceWorker.js
```
### Component's Segregation

Atomic design is the front approach to organize components. From this statement, a component should be located in the following folders:

```
client
└── src
    ├── components
        ├── atoms
        ├── molecules
        ├── organisms
        ├── templates
        └── pages
```
To learn more about atomic please visit -> (http://atomicdesign.bradfrost.com/table-of-contents/)

### Class convention

BEM is the naming convention suggested for this project.

```
block__element__modifier
```

Also in combination with atomic, each class should has a prefix that would denote which type of element we are declaring.

Take a look for more info -> https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving

### Used Libraries
> * gridlex: https://gridlex.devlint.fr/
> * whatwg-fetch: https://www.npmjs.com/package/whatwg-fetch

### References
> * Sass Datatypes: https://www.tutorialsteacher.com/sass/sass-data-types
