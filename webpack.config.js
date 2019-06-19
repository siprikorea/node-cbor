const path = require('path');

module.exports = {
  entry: {
    cbor: './lib/cbor.js'
  },
  output: {
    library: '[name]',
    libraryTarget: 'umd',
    filename: '[name]' + '.min.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this'
  }
};
