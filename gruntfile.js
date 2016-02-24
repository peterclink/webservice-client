module.exports = function(grunt) {

    var initialConfig = {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                expand: false
            },
            build: {
                files: {
                    'dist/js/scripts.min.js' : 'app/js/**/*.js'
                }
            },
            build_vendor: {
                files: {
                    'dist/js/vendor.min.js' : '.tmp/vendor.js'
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            app: {
                files: {
                    'app/css/styles.css': 'app/css/source/styles.scss'
                }
            }
        },
        cssmin: {
            build: {
                files:[{
                    expand: true,
                    cwd:'app/css',
                    src:['*.css','!*.min.css'],
                    dest:'app/css',
                    ext:'.min.css'
                }]
            },
            build_vendor: {
                files:[{
                    expand: true,
                    cwd:'.tmp',
                    src:['*.css','!*.min.css'],
                    dest:'dist/css',
                    ext:'.min.css'
                }]
            }
        },
        copy: {
          build: {
            expand: true,
            cwd: 'app/',
            src: [
                'css/*.css',
                'css/*.map',
                'img/**',
                'views/**'
            ],
            dest: 'dist/'
          },
          dev_css: {
            src: 'app/css/styles.css',
            dest: 'app/css/styles.min.css'
          }
        },
        imagemin: {
            app: {
                options: {
                    optimizationLevel: 7,
                    progressive: true,
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/img/',
                    src: ['**/*.{png,jpg,gif'],
                    dest: 'app/img/'
                }]
            }
        },
        watch: {
            app_css: {
                files: ['app/css/source/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                  spawn: false
                }
            },
            app_images: {
                files: ['app/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        },
        bower_concat: {
          build: {
            dest: '.tmp/vendor.js',
            cssDest: '.tmp/vendor.css',
          }
        },
        mkdir: {
            build: {
                options: {
                    create: ['.tmp','dist/js']
                },
            },
        },
        clean: {
            build: {
                src: [".tmp"]
            },
            app: {
                src: [".tmp", "dist", "app/css/*.css", "app/css/*.map"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    base: 'app/',
                    livereload: false,
                    open: {
                      target: 'http://localhost:8000'
                    },
                    onCreateServer: function(server, connect, options) {
                        
                    }
                }
            }
        },
        processhtml: {
            dist: {
                options: {
                    process: true,
                    data: {
                        title: 'My app',
                        message: 'This is production distribution'
                    }
                },
                files: {
                    'dist/index.html': 'app/index.html'
                }
            }
        }
    };

    require('load-grunt-tasks')(grunt);
    grunt.initConfig(initialConfig);

    /*grunt.registerTask('default', ['newer:uglify', 'sass', 'copy', 'watch', 'imagemin']);*/

    grunt.registerTask('default', ['build']);
    
    grunt.registerTask('serve', ['connect:server:keepalive']);

    grunt.registerTask('dev', ['sass', 'imagemin', 'connect:server', 'watch']);
    grunt.registerTask('xdev', ['sass', 'imagemin', 'watch']);

    grunt.registerTask('clear', ['clean:app']);

    grunt.registerTask('init', ['sass']);

    grunt.registerTask('build', [
        'sass', 
        'cssmin:build',
        'imagemin',
        'mkdir', 
        'copy:build', 
        'uglify:build', 
        'bower_concat',
        'cssmin:build_vendor',
        'uglify:build_vendor', 
        'processhtml', 
        'clean:build'
    ]);
};