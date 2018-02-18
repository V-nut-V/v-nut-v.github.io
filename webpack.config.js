var path = require('path');

module.exports = {
  entry: "./web/scripts/source/global.js",
  output: {
    path: path.resolve(__dirname, "./web/scripts/dest"),
    filename: "global.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
