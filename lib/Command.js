var util = require('util');

var CompassObject = require('./CompassObject');


function Command() {
	Command.super_.apply(this, arguments);
}

util.inherits(Command, CompassObject);

module.exports = Command;
