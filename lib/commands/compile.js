var util = require('util');

var Command = require('../Command');


function compile(args, options) {
	compile.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(compile, Command);

module.exports = compile;
