const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const distRoot = path.resolve('public');

module.exports = merge({
  entry: path.resolve('app/src/client/index.js'),
  output: {
    path: distRoot,
    filename: '[name].bundle.js',
    publicPath: '/'
  }
}, common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distRoot,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PreactJS Acme"
    })
  ]
})