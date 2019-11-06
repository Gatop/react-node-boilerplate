# react-node-boilerplate_server
This is an API built with **NodeJs** using **Express Framework**.

### Node setup

```sh
# Install npm dependencies in project folder
npm install
```

### Run server

```sh
npm run dev
# alias for
nodemon src/server.js
```

### Endpoints APIRest (Mappings)

	+---------+-----------------------------------------------+----------------------------------------+
	| Request | URI                                           | Action                                 |
	+---------+-----------------------------------------------+----------------------------------------+
	|GET      | colors                                        | colorController@list                   |
	|GET      | /random-color                                 | colorController@randomColor            |
	+---------+-----------------------------------------------+----------------------------------------+

## Modules

These modules were used to create this API:

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [morgan](https://www.npmjs.com/package/morgan)