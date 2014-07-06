module.exports = function(grunt) {

	grunt.initConfig({
	  connect: {
		server: {
		  options: {
			port: 8000,
			base: './www',
			keepalive: true
		  }
		}
	  }
	});
	
	grunt.loadNpmTasks('grunt-contrib-connect');
};