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
    },
    protractor: {
      options: {
        configFile: "config/proctractor.conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
      },
      chrome: {
        options: {
          args: {} // Target-specific arguments
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('unit-continuous', ['karma:continuous', 'watch']);
  grunt.registerTask('unit', ['karma:single']);
  grunt.registerTask('e2e', ['protractor']);
};