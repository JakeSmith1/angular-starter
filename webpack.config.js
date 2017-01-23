const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./client/app/app.js'],
  output: {
    path: __dirname + '/client/public',
    filename: 'bundle.js'
  },
  debug: true,
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
      query: {
        presets: ['es2015', 'stage-1', 'angular']
      }
    },
    {
      test: /\.scss$/,
      loader: "style!css!sass"
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }
  ]
}
};
