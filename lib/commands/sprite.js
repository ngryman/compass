var util = require('util');

var Command = require('../Command');


function sprite(args, options) {
	sprite.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(sprite, Command);

module.exports = sprite;
