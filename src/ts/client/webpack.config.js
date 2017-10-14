const webpack = require('webpack');
const path = require('path');

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');

const DIST_ROOT = path.join(__dirname, "dist/");
const BUILD_ROOT = path.join(DIST_ROOT, "build/");
const EXTERNALS = {
    "react": "react",
    "react-dom": "react-dom",
    "redux": "redux",
    "react-redux": "react-redux",
};
const VENDOR_MANIFEST_PATH = path.join(BUILD_ROOT, 'vendor-manifest.json');

module.exports = function (prod) {
  var vendor_manifest;
  try {
    vendor_manifest = require(VENDOR_MANIFEST_PATH);
  } catch (e) {
    console.log(`Vendor manfiest not found at ${VENDOR_MANIFEST_PATH}. Did you build vendor bundle?`);
    return undefined;
  }

  var config = {
    entry: {
      app: "./app/index.tsx",
    },
    output: {
      filename: "app.bundle.js",
      path: BUILD_ROOT
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
      new webpack.DllReferencePlugin({
        context: ".",
        manifest: vendor_manifest,
      })
    ],
  };

  if (prod) {
    // Do stuff like minify
  }

  return config;
};
