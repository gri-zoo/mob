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
	  },
    karma: {
      continuous: {
        configFile: 'config/karma.conf.js',
        background: true
      },
      single: {
        configFile: 'config/karma.conf.js',
        singleRun: true,
  },
    },
    watch: {
      karma: {
        files: ['www/js/**/*.js', 
          'www/test/unit/**/*.js'
        ],
        tasks: ['karma:unit:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('unit-continuous', ['karma:continuous', 'watch']);
  grunt.registerTask('unit', ['karma:single']);
};