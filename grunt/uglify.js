//Uglify assembled *.js file
module.exports = {
	options: {
		mangle: false
	},
	vendor: {
		files: [{
				expand: true,
				cwd: '<%= dev.js %>/vendor',
				src: '**/*.js',
				dest: '<%= build.js %>/vendor',
				ext: '.min.js'
		}]
	},
	main: {
			files: {
					'<%= build.js %>/inclusion.min.js': '<%= dev.js %>/inclusion.js'
			}
	},
	ie: {
		files: {
				'<%= build.js %>/ie/ie.min.js': '<%= dev.js %>/ie/ie.js'
		}
	}
}
