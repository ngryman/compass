var util = require('util');


var StandardError = Error;

function Error() {
	Error.super_.apply(this, arguments);
}
util.inherits(Error, StandardError);

function FilesystemConflict() {
	FilesystemConflict.super_.apply(this, arguments);
}
util.inherits(FilesystemConflict, Error);

function MissingDependency() {
	MissingDependency.super_.apply(this, arguments);
}
util.inherits(MissingDependency, Error);

function SpriteException() {
	SpriteException.super_.apply(this, arguments);
}
util.inherits(SpriteException, Error);

module.exports = {
	Error: Error,
	FilesystemConflict: FilesystemConflict,
	MissingDependency: MissingDependency,
	SpriteException: SpriteException
};
