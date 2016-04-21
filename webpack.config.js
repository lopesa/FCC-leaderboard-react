var autoprefixer = require('autoprefixer');
var path = require("path");

module.exports = {
  entry: "./app",
  output: {
    filename: "public/bundle.js",
    path: path.resolve(__dirname, "public"),
    // publicPath: "/assets/",
    filename: "bundle.js"
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
      // 
      // {
      //   test: /\.svg/,
      //   loader: 'file'
      // }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
}