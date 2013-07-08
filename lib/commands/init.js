var util = require('util');

var Command = require('../Command');


function init(args, options) {
	init.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(init, Command);

module.exports = init;
