var webpack = require('webpack');
var webpack_config_builder = require('./webpack.config.js');

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
            dev: webpack_config_builder(false, false),
            dev_with_externals: webpack_config_builder(true, false),
            prod: webpack_config_builder(true, true),
        },
        exec: {
            electron: 'npm-run electron .'
        },
    });

    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-exec');
};