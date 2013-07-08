var util = require('util');

var Command = require('../Command');


function create(args, options) {
	create.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(create, Command);

module.exports = create;
