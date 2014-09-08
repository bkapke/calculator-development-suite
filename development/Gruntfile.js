//Array of grunt tasks to load 
var gruntTasks = [
    'grunt-contrib-qunit',
    'grunt-contrib-uglify',
    'grunt-contrib-concat',
    'grunt-contrib-watch',
    'grunt-contrib-jshint'
];

var commonOptions = {
    force : true,
    // force triple equals !== or === rather than == !=
    eqeqeq: false,
    // flags incrementing and decrementing
    plusplus: false,
    // flags undefined variables
    undef : true,
    // ignores a list of globals
    globals : null
};

var testCodeGlobals = {
    "jQuery" : true,
    "$" : true,
    "hljs" : true,
    "Tabs" : true,
    "document" : true,
    "modules": true,
    "expect" : true,
    "equal" : true,
    "throws" : true,
    "module" : true,
    "test" : true,
    "ok" : true
};

var FileMap = {
    unitTests : "unit-tests.html",
    applicationJS: "../js**/*.js",
    testJS: "unit-tests/**/*.js",
    configJS: "Gruntfile.js",
    html : "../index.html"
};

var concatFileArray = [
    "../js/ApplicationModulesMap.js",
    "../js/Calculator.js",
    "../js/CalculatorUIController.js",
    "../js/tabs.js",
    "../js/page.js"
];

var cssConcatFileArray = [
    "../css/tabs.css",
    "../css/main.css",
    "../css/calculator.css"
];

//Configure a banner object and set it to a var so we can include it in the uglified script 
 
function getFileHeader(path) {
    return '//-------------------------------------------------------------------\n' +
           '//\n' +
           '//               File Location: ' + path + '\n' +
           '//\n' +
           '//-------------------------------------------------------------------\n\n\n';
}

var getOptions = function(globals) {
    var options = commonOptions;
    
    if (globals !== undefined) {
        options.globals = globals;
    }
    
    return options;
};


module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // the package file to use
        
        watch : {
            applicationCode : {
                files: FileMap.applicationJS,
                tasks: ['watch-tasks']
            },
            testJS : {
                files : FileMap.testJS,
                tasks: ['watch-tasks']
            },
            configJS : {
                files : FileMap.configJS,
                tasks: ['watch-tasks']
            },
            css : {
                files : cssConcatFileArray,
                tasks: ['watch-tasks']
            },
            html : {
                files : FileMap.html,
                tasks: ['watch-tasks']
            }
        },
        qunit: {
            unitTests: [
                FileMap.unitTests
            ]
        },
        jshint: {
            applicationJS : {
                options : getOptions(),
                src : [
                    FileMap.applicationJS
                ]
            },
            testJS : {
                options : getOptions(testCodeGlobals),
                src : [
                    FileMap.testJS
                ]
            },
            configJS : {
                options : getOptions(testCodeGlobals),
                src : [
                    FileMap.configJS
                ]
            }
        },
        concat : {

            js: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                      '<%= grunt.template.today("yyyy-mm-dd") %> */ \n\n\n',
                    // add a header with the file name before each file is concatenated
                    process: function (src, filepath) {
                        //get the process header from the function above
                        return getFileHeader(filepath) + src + '\n\n';
                    },
                },
                src: concatFileArray,
                dest: '../dist/js/Application.js',
            },

            css: {
                src: cssConcatFileArray,
                dest: '../dist/css/Application.css',
            }
        },
        uglify : {
            options: {
                //adds a banner to the top of the file
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                  '<%= grunt.template.today("yyyy-mm-dd") %> */ \n\n\n',
                mangle: true
            },
            
            applicationJS: {
                files: {
                    "../dist/js/Application.min.js" : concatFileArray
                }
            }
        }
    });
    
    /**
     * Loads the grunt tasks from the array of tasks at the top of the file
     */
    (function loadGruntTasks() {
      for(var i = 0; i < gruntTasks.length; i++) {
        grunt.loadNpmTasks(gruntTasks[i]);
      }
    })();
    
    // Register tasks to call
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('watch-tasks', ['jshint', 'concat', 'uglify', 'qunit']);
    
};