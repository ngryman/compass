var EventEmitter = require('events').EventEmitter;

var CompassError = require('./CompassError');
var util = require('util');


function CompassObject(onError) {
	CompassObject.super_.call(this);
	this.onError = onError || this.onError;

	CompassObjectError.prototype.name = this.name + 'Error';
	function CompassObjectError(message) {
		CompassObjectError.super_.call(this, message);
	}

	util.inherits(CompassObjectError, CompassError);
	this.Error = CompassObjectError;
}

CompassObject.prototype.error = function(message) {
	this.onError(new this.Error(message));
};

CompassObject.prototype.onError = function(err) {
	this.emit('error', err);
};

module.exports = CompassObject;
