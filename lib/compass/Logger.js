var configuration = require('configuration');
require('../util/string');


function Logger(actions) {
	var lastActionIsAMap = actions[actions.length - 1] instanceof Map;
	this.options = lastActionIsAMap ? actions.pop() : {};
	this.actions = this.DEFAULT_ACTIONS.dup + actions;
}

Logger.prototype.DEFAULT_ACTIONS = ['directory', 'exists', 'remove', 'create',
	'overwrite', 'compile', 'error', 'identical', 'warning'];

Logger.prototype.COLORS = { clear: 0, red: 31, green: 32, yellow: 33 };

Logger.prototype.ACTION_COLORS = {
	error:     'red',
	warning:   'yellow',
	compile:   'green',
	overwrite: 'yellow',
	create:    'green',
	remove:    'yellow',
	exists:    'green',
	directory: 'green',
	identical: 'green',
	convert:   'green',
	unchanged: 'yellow'
};

Logger.prototype.record = function(action, args) {
	msg = '';

	this.log(msg);
};

function* red() {
	try {
		process.stderr.write(color('red'));
		process.stdout.write(color('red'));
		yield;
	} finally {
		process.stderr.write(color('clear'));
		process.stdout.write(color('clear'));
	}
}

Logger.prototype.red = red;

function* yellow() {
	try {
		process.stderr.write(color('yellow'));
		process.stdout.write(color('yellow'));
		yield;
	} finally {
		process.stderr.write(color('clear'));
		process.stdout.write(color('clear'));
	}
}

Logger.prototype.yellow = yellow;

Logger.prototype.color = function(c) {
	var color = c && COLORS[c];
	if (!color || !configuration.color_output || this.options.boring) {
		return '';
	}
	return '\e[' + color + 'm';
};

Logger.prototype.emit = function(msg) {
	console.log(msg);
};

// Emit a log message
Logger.prototype.log = function(msg) {
	process.stdout.write(msg);
};

// add padding to the left of an action that was performed.
Logger.prototype.actionPadding = function(action) {
	return ' '.repeat(Math.max(this.maxActionLength - action.toString().length, 0));
};

// the maximum length of all the actions known to the logger.
// TODO

var dummy = function() {
};

module.exports = {
	Logger: Logger,
	NullLogger: {
		record: dummy,
		log: dummy,
		red: dummy
	}
};
