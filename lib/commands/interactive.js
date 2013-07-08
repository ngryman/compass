var util = require('util');

var Command = require('../Command');


function interactive(args, options) {
	interactive.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(interactive, Command);

module.exports = interactive;
