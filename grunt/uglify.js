//Uglify assembled *.js file
module.exports = {
	options: {
		mangle: false
	},
	vendor: {
		files: [{
				expand: true,
				cwd: '<%= build.js %>/vendor',
				src: ['**/*.js', '!*.min.js'],
				dest: '<%= build.js %>/vendor',
				ext: '.min.js'
		}]
	},
	main: {
			files: {
					'<%= build.js %>/inclusion.min.js': '<%= build.js %>/inclusion.js'
			}
	},
	ie: {
		files: {
				'<%= build.js %>/ie/ie.min.js': '<%= build.js %>/ie/ie.js'
		}
	}
}
