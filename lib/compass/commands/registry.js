var Error = require('../errors').Error;
require('../../util/regexp');


function Registry() {
}

Registry.prototype.register = function(name, commandClass) {
	this.commands = this.commands || {};
	this.commands[name] = commandClass;
};

Registry.prototype.get = function(name) {
	this.commands = this.commands || {};
	return this.commands[name] || this.commands[this.abbreviationOf(name)];
};

Registry.prototype.abbreviationOf = function(name) {
	var re = new RegExp('^' + RegExp.escape(name));
	var matching = Object.keys(this.commands).filter(function(key) {
		return re.test(key);
	});
	if (matching.length === 1) {
		return matching[0];
	} else if (re.test(name)) {
		return null;
	} else if (matching.length > 1) {
		throw Error('Ambiguous abbreviation ' + name + '. ' +
			'Did you mean one of: ' + matching.join(', '));
	} else {
		throw Error('Command not found: ' + name);
	}
};

Registry.prototype.abbreviation = function(name) {
	var re = new RegExp('^' + RegExp.escape(name));
	return Object.keys(this.commands).some(function(key) {
		return re.test(key);
	});
};

Registry.prototype.commandExists = function(name) {
	this.commands = this.commands || {};
	return name && (typeof this.commands[name] !== 'undefined' ||
		this.abbreviation(name));
};

Registry.prototype.all = function() {
	return Object.keys(this.commands);
};
