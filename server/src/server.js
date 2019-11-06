
/**************
 * Base Setup *
 **************/
const express = require('express'),
      bodyParser = require('body-parser'),
      morgan   = require('morgan');

const api = express();

// Setting the port
api.set('port', process.env.PORT || 4000);

// Configuring the access control for the request
api.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Configure bodyParser allowing us getting data from a POST
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());


/***************
 * Middlewares *
 ***************/

 // Register incoming requests and log the information
 api.use(morgan('dev'));

 /**************
 *   Routes   *
 **************/

// Importing routes
const colorRoutes = require('./routes/colors');

// Declare routes
api.use('/', colorRoutes);

/***********************
 * Starting the server *
 ***********************/

api.listen(api.get('port'), () => {
  console.log('Running server on port 4000');
});
