const colorRouter = require('express').Router();
const colorController = require('../controllers/colorController');

// @see colorController
colorRouter.get('/colors', colorController.list);

module.exports = colorRouter;