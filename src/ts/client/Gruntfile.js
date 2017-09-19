var webpack = require('webpack');

const ALL_TS_EXCLUDE_NODE_MODULES = [
    '**/*.ts',
    '**/*.tsx',
    '!node_modules/**'
];

module.exports = function (grunt) {
    grunt.initConfig({
        tslint: {
            options: {
                // Attempt to auto-fix the lint errors
                fix: grunt.option('fix'),
                // Force succeed the tslint task
                force: grunt.option('force'),
            },
            all: {
                src: ALL_TS_EXCLUDE_NODE_MODULES
            },
        },
        webpack: {
            options: require('./webpack.config.js'),

            prod: {
//                  "compilerOptions": {
//                    "noImplicitAny": true,
//                    "noUnusedLocals": true,
//                    "noUnusedParameters": true,
//                    "removeComments": true
//                },
                plugins: [
                    // Uglify?
                    //new webpack.optimize.UglifyJsPlugin(),
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-webpack')
};