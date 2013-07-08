var util = require('util');

var Command = require('../Command');


function validate(args, options) {
	validate.super_.apply(this, arguments);
	this.error('Not implemented');
}

util.inherits(validate, Command);

module.exports = validate;
