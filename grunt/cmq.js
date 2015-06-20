//Combine media queries in result *.css files
module.exports = {
	options: {
		log: false
	},
	main: {
		files:[{
			expand: true,
			flatten: true,
			src: '<%= build.css %>/**/*.css',
			dest: '<%= build.css %>/'
		}]
	}
}
