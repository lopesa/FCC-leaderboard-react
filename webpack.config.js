var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./app",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss/,
        loader: 'style!css!postcss!sass'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
}