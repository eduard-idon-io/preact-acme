const nodeExternals = require('webpack-node-externals');
const path = require('path');
const distRoot = path.resolve('functions');

module.exports = {
    entry: path.resolve('app/src/server/index.js'),
    output: {
      path: distRoot,
      filename: 'index.js', // <-- Important
      libraryTarget: 'this' // <-- Important
    },
    target: 'node', // <-- Important
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'preact']
                }
            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve('app'),
            '@': path.resolve('app/src')
        },
        extensions: [ '.js', '.jsx' ]
    },
    externals: [nodeExternals()] // <-- Important
};