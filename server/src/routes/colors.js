const colorRouter = require('express').Router();
const colorController = require('../controllers/colorController');

// @see colorController
colorRouter.get('/colors', colorController.list);
colorRouter.get('/random-color', colorController.randomColor);

module.exports = colorRouter;