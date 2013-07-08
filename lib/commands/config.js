var util = require('util');

var Command = require('../Command');


function config(args, options) {
	config.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(config, Command);

module.exports = config;
