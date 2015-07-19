module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: 'dev',
		        js: '<%= dev.main %>/js',
		        styles: '<%= dev.main %>/styles',
		        css: '<%= dev.main %>/css',
		        html: '<%= dev.main %>/html',
		        img: '<%= dev.main %>/img',
		        fonts: '<%= dev.main %>/fonts',
		        helpers: '<%= dev.main %>/helpers',
		        devtools: '<%= dev.main %>/devtools'
			},
			// Build paths
			build: {
				main: 'build',
		        css: '<%= build.main %>/css',
		        fonts: '<%= build.main %>/fonts',
		        img: '<%= build.main %>/img',
		        js: '<%= build.main %>/js'
			}
		}
	});
};