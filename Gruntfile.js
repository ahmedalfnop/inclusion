module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: 'dev',
				js: 'dev/js',
				styles: 'dev/styles',
				css: 'dev/css',
				html: 'dev/html',
				img: 'dev/img',
				fonts: 'dev/fonts',
				helpers: 'dev/helpers',
				devtools: 'dev/devtools'
			},
			// Build paths
			build: {
				main: 'build',
				css: 'build/css',
				fonts: 'build/fonts',
				img: 'build/img',
				js: 'build/js'
			}
		}
	});
};