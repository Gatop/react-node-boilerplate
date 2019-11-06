const Color = require('../models/color');

const colorController = {};

/**
 * GET ALL colors.
 *
 * @param object $req
 *   The request to be processed.
 * @param object $res
 *   The response.
 */
colorController.list = (req, res) => {
  let colorBlue = new Color('blue', '#1FA6B9');
  let colorRed = new Color('red', '#D62052');

  let colors = [colorBlue, colorRed];

  res.json(colors);
};

/**
 * GET ALL colors.
 *
 * @param object $req
 *   The request to be processed.
 * @param object $res
 *   The response.
 */
colorController.randomColor = (req, res) => {
  var randomCode = Math.floor(Math.random()*16777215).toString(16);

  let newColor = new Color('random', '#'+randomCode);

  res.json(newColor);
};

module.exports = colorController;