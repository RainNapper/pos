const webpack = require('webpack');
const path = require('path');

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader')

const EXTERNALS = {
    "react": "React",
    "react-dom": "ReactDOM",
    "redux": "Redux",
    "react-redux": "ReactRedux",
}

module.exports = function (with_externals, prod) {
  var config = {
    entry: {
      app: "./app/index.tsx",
    },
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist/build/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      // Add same modules as typescript config, so paths used by compiler
      // are also understood by webpack.
      modules: [
        // Mirror modules used in ts config paths
        "../shared",
        "./node_modules",
        ".",
      ]
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by
        // 'awesome-typescript-loader'.
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          //useBabel: false,
        },
        {
          test: /\.js$/,
          loader: "source-map-loader",
          enforce: "pre",
        }
      ]
    },
    plugins: [
      new CheckerPlugin(),

    ],
  };

  if (with_externals) {
    // Include externals as a separate bundle.
    config.entry.externals = Object.keys(EXTERNALS);
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: "externals",
      filename: "externals.js",
      minChunks: Infinity,
    }));
  } else {
    // Instruct webpack to ignore externals.
    config.externals = EXTERNALS;
  }

  if (prod) {
    // Do stuff like minify
  }

  return config;
}