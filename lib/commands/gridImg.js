var util = require('util');

var Command = require('../Command');


function gridImg(args, options) {
	gridImg.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(gridImg, Command);

module.exports = gridImg;
