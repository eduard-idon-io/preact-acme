const nodeExternals = require('webpack-node-externals');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const distRoot = path.resolve('functions');

module.exports = merge({
    entry: path.resolve('functions/src/index.js'),
    output: {
      path: distRoot,
      filename: 'index.js', // <-- Important
      libraryTarget: 'this' // <-- Important
    },
    target: 'node', // <-- Important,
    externals: [nodeExternals()] // <-- Important
  },
  common
);
    