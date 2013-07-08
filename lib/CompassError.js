var util = require('util');


function CompassError(message) {
	CompassError.super_.call(this);
	this.message = message || '';
}

util.inherits(CompassError, Error);

CompassError.prototype.name = 'CompassError';

module.exports = CompassError;
