module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-git');

    grunt.initConfig({
        gitclone: {
            clone: {
                options: {
                    repository: 'https://github.com/ajaxorg/ace.git',
                    branch: 'master',
                    directory: './public/vendors/ace'
                }
            }
        },
        shell: {
            ace: {
                options: {
                    stderr: true,
                    stdout: true
                },
                command: [
                    'cd public/vendors/ace/',
                    'npm install',
                    'node ./Makefile.dryice.js'
                ].join('&&')
            }
        }
    });

    grunt.registerTask('default', ['gitclone', 'shell']);
};