const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader', options: {
          presets: ['@babel/preset-env']
        }
      }]
    }]
  }
}
