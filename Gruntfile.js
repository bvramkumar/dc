module.exports = function (grunt) {
    grunt.initConfig({
        concat: {           
            dist: {
                src: ['bower_components/**/*'],
                dest: 'dev/vendor.js',
            },
        },
        watch: {
            scripts: {
                files: ['**/*'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
};