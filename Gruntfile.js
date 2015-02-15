module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		fixturesPath: 'fixtures',

		express: {
			server: {
				options: {
					port: 8050,
					host: 'http://localhost',
					bases: 'dist'
				}
			}
		},

		watch: {
			html: {
				files: ['dev/*.html'],
				tasks: ['copy:html'],
				options: {
					livereload: true,
				}
			},
			css: {
				files: ['dev/less/*.less'],
				tasks: ['less'],
				options: {
					livereload: true,
				}
			},
			js: {
				files: ['dev/js/*.js'],
				tasks: ['copy:js'],
				options: {
					livereload: true,
				}
			},
			json: {
				files: ['dev/data/*.json'],
				tasks: ['copy:json'],
				options: {
					livereload: true,
				}
			},
			php: {
				files: ['dev/actions/*.php'],
				tasks: ['copy:php'],
				options: {
					livereload: true,
				}
			}
		},

		copy: {
			html: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['dev/*.html'],
						dest: 'dist/',
						filter: 'isFile'
					}
				]
			},
			images: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['dev/img/**'],
						dest: 'dist/img',
						filter: 'isFile'
					}
				]
			},
			js: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['dev/js/**'],
						dest: 'dist/js',
						filter: 'isFile'
					}
				]
			},
			json: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['dev/data/**'],
						dest: 'dist/data',
						filter: 'isFile'
					}
				]
			},
			php: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['dev/actions/**'],
						dest: 'dist/actions',
						filter: 'isFile'
					}
				]
			}
		},

		less: {
			development: {
				options: {
					paths: ['dev/less']
				},
				files: {
					'dist/css/styles.css': 'dev/less/styles.less'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-html-build');

	grunt.registerTask('default', [
		'build',
		'server'
	]);

	grunt.registerTask('build', [
		'copy',
		'less'
	]);

	grunt.registerTask('dev', [
		'express:dev',
		'less',
		'copy',
		'watch'
	]);

	grunt.registerTask('server', [
		'express',
		'watch',
		'less',
		'copy',
		'express-keepalive'
	]);

};
