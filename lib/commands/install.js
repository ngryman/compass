var util = require('util');

var Command = require('../Command');


function install(args, options) {
	install.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(install, Command);

module.exports = install;
