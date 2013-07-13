var flatten = require('flatten');

var paths = require('configuration/paths');


var attributes = flatten([
	// What kind of project?
	'project_type',
	// Where is the project?
	'project_path',
	'http_path',
	// Where are the various bits of the project
	attributesForDirectory('css', 'stylesheets'),
	attributesForDirectory('sass', null),
	attributesForDirectory('images'),
	attributesForDirectory('generated_images'),
	attributesForDirectory('javascripts'),
	attributesForDirectory('fonts'),
	attributesForDirectory('extensions', null),
	// Compilation options
	'output_style',
	'environments',
	'relative_assets',
	'additional_import_paths',
	'sass_options',
	attributesForDirectory('cache', null),
	'cache',
	// Helper configuration
	'asset_host',
	'asset_cache_buster',
	'line_comments',
	'color_output',
	'preferred_syntax',
	'disable_warnings',
	'sprite_engine',
	'chunky_png_options'
]);

var ARRAY_ATTRIBUTES = [
	'sprite_load_path',
	'required_libraries',
	'loaded_frameworks',
	'framework_path'
];

function attributesForDirectory(dirName, httpDirName) {
	httpDirName = httpDirName || dirName;
	// TODO
}

/* Registers a new configuration property.
 * Extensions can use this to add new configuration options to compass.
 *
 * @param [Symbol] name The name of the property.
 * @param [String] comment A comment for the property.
 * @param [Proc] def A method to calculate the default value for the property.
 *                   The proc is executed in the context of the project's
 *                   configuration data.
 */
function addConfigurationProperty(name, comment, def) {
	comment = comment || null;
	// TODO
	if (typeof comment === 'string') {
		if (comment.substr(0, 1) !== '#') {
			comment = '# ' + comment;
		}
		if (comment.substr(comment.length - 1) !== '\n') {
			comment += '\n';
		}
		// TODO
	}
	if (~['dir', 'path'].indexOf(name)) {
		return paths.stripTrailingSeparator(name);
	}
}

function removeConfigurationProperty(name) {
	delete attributes[name];
}

var configs = {};

[
	'adapters',
	'comments',
	'defaults',
	'helpers',
	'inheritance',
	'serialization',
	'paths',
	'data',
	'file_data'
].forEach(function(lib) {
	configs[lib] = require('configuration/' + lib);
});

module.exports = {
	configuration: new Configuration(),
	configs: configs
};
