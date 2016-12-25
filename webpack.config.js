const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./front/App.js",
  output: {
    path: path.join(__dirname, "./front/bundle"),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
