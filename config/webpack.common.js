const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const distRoot = path.resolve('public');

module.exports = {
    plugins: [
      new CleanWebpackPlugin(['public']),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'preact']
                }
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
                'resolve-url-loader'
              ]
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'url-loader'
              ]
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'url-loader'
              ]
            },
            {
              test: /\.(csv|tsv)$/,
              use: [
                'csv-loader'
              ]
            },
            {
              test: /\.(xml)$/,
              use: [
                'xml-loader'
              ]
            }
        ]
    },
    resolve: {
      alias: {
        '~': path.resolve('app/'),
        'src': path.resolve('app/src/')
      },
      extensions: [ '.js', '.jsx' ]
    }
};