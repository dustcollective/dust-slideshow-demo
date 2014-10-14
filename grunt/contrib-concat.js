module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			separator: ';',
		},
		dist: {
			src: [
				'bower_components/jquery/jquery.min.js',
				'bower_components/jquery-cycle2/build/jquery.cycle2.js',
				'<%= dirs.src %>/assets/js/main.js'
			],
			dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};
