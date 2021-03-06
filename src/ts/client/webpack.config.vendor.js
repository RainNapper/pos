var webpack = require('webpack')
var path = require('path')

const DIST_ROOT = path.join(__dirname, "dist/");
const BUILD_ROOT = path.join(DIST_ROOT, "build/");
module.exports = {
  entry: {
    // create two library bundles, one with jQuery and
    // another with Angular and related libraries
    'vendor': ['react', 'redux', 'react-dom', 'react-redux'],
  },

  output: {
    filename: 'vendor.bundle.js',
    path: BUILD_ROOT,

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: 'vendor_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.join(BUILD_ROOT, 'vendor-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: 'vendor_lib',
    }),
  ],
}
