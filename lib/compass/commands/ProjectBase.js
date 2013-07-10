var util = require('util');

var Base = require('./Base');

function ProjectBase(workingPath, options) {
	options = options || {};
	this.super_.apply(this, arguments);
	this.projectName = this.determineProjectName(workingPath, options);
	// TODO
	this.configure();
}

util.inherits(ProjectBase, Base);

ProjectBase.prototype.execute = function() {
	this.super_.apply(this, arguments);
};

ProjectBase.prototype.configure = function() {
	this.addProjectConfiguration();
	// TODO
};

ProjectBase.prototype.addProjectConfiguration = function() {
	// TODO
};

module.exports = ProjectBase;
