function Base(workingPath, options) {
	Base.super_.apply(this, arguments);
	this.workingPath = workingPath;
	this.options = options;
}

Base.prototype.execute = function() {
	this.perform();
};

Base.prototype.perform = function() {
	throw new Error('Not Implemented');
};

Base.prototype.successful = function() {
	return !this.failed;
};

Base.prototype.failed = function() {
	this.failed = true;
};

Base.prototype.framework = function() {
	// TODO
};

module.exports = Base;
