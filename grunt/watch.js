//Watch for changes
module.exports = {
	all: {
		files: ['<%= dev.html %>/**/*.html',
				'<%= dev.styles %>/**/*.{scss,sass,less,styl}',
				'<%= dev.css %>/*.css',
				'<%= dev.js %>/**/*.js',
				'<%= dev.img %>/**/*.{png,jpg,gif}',
				'<%= dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'],
		tasks: ['default'],
		options: {
			spawn: false,
		},
	}
}
