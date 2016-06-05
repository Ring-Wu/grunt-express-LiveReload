var path = require('path');

module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt
    grunt.initConfig({

        express: {
            server: {
                options: {
                    port: 7000,
                    bases: '.',
                    hostname: 'localhost',
                    server: path.resolve('./app.js'),
                    livereload: true
                }
            }
        },

        // grunt-watch will monitor the projects files
        watch: {
            all: {
                files: ['./views/*.ejs', './public/**/*.css', './public/**/*.js'],
                options: {
                    livereload: true
                }
            }
        },

        // grunt-open will open your browser at the project's URL
        // https://www.npmjs.org/package/grunt-open
        open: {
            all: {
                path: 'http://localhost:7000'
            }
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    // Creates the `server` task
    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);
};

