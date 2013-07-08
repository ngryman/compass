var util = require('util');

var Command = require('../Command');


function clean(args, options) {
	clean.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(clean, Command);

module.exports = clean;
