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

module.exports = colorController;