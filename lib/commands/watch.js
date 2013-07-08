var util = require('util');

var Command = require('../Command');


function watch(args, options) {
	watch.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(watch, Command);

module.exports = watch;
