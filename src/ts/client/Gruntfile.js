var webpack = require('webpack');
var webpackConfigBuilder = require('./webpack.config.js');
var vendorWebpackConfig = require('./webpack.config.vendor.js');

const ALL_TS_EXCLUDE_NODE_MODULES = [
    '**/*.ts',
    '**/*.tsx',
    '!node_modules/**',
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
                src: ALL_TS_EXCLUDE_NODE_MODULES,
            },
        },
        webpack: {
            dev: webpackConfigBuilder(false),
            vendor: vendorWebpackConfig,
            prod: webpackConfigBuilder(true),
        },
        exec: {
            electron: 'npm-run electron .',
        },
    });

    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-exec');
};
