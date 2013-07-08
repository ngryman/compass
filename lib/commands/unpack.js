var util = require('util');

var Command = require('../Command');


function unpack(args, options) {
	unpack.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(unpack, Command);

module.exports = unpack;
