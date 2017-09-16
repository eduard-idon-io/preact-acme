const Path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const distRoot = Path.resolve('public');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = merge({
  entry: Path.resolve('src/server/index.js'),
  output: {
    path: distRoot,
    filename: '[name].bundle.js',
    publicPath: '/'
  }
}, common, {
  plugins: [
    new UglifyJSPlugin()
  ]
})