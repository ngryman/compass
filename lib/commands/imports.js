var util = require('util');

var Command = require('../Command');


function imports(args, options) {
	imports.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(imports, Command);

module.exports = imports;
