//Assemble *.js files
module.exports = {
	main: {
		files: [{
			src: ['<%= dev.js %>/*.js', '!<%= dev.js %>/inclusion.js'],
			dest: '<%= dev.js %>/inclusion.js'
		}]
	}
}
