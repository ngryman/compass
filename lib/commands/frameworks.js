var util = require('util');

var Command = require('../Command');


function frameworks(args, options) {
	frameworks.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(frameworks, Command);

module.exports = frameworks;
