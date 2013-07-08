var util = require('util');

var Command = require('../Command');


function stats(args, options) {
	stats.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(stats, Command);

module.exports = stats;
