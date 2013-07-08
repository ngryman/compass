var util = require('util');

var Command = require('../Command');


function extension(args, options) {
	extension.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(extension, Command);

module.exports = extension;
