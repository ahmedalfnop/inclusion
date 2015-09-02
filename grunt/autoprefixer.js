//Autoprefixer
module.exports = {
	options: {
		//By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
		browsers: ['> 1%', 'last 10 versions', 'Opera 12.1', 'Explorer > 7', 'Safari >= 3', 'Firefox >=3.6', 'Opera >=10', 'Chrome >=1'],
		cascade: true
	},
	main: {
		files:[{
			expand: true,
			src: '<%= build.css %>/**/*.css',
			dest: '<%= build.css %>/'
		}]
	}
}
