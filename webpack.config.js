var ExtractText = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "../../blocks/dist/[name].css",
});

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  mode: debug ? 'development' : 'production',
  entry: ['./preprocess/scripts/blocks.js', './preprocess/styles/blocks.scss'],
  output: {
    path: __dirname + '/blocks/dist/',
    filename: 'blocks.build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      },
    ]
  },
  plugins: [
    extractSass,
  ],
  watch: true,
};