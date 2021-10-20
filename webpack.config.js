const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: './front/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
  },
  module: {
      rules: [
        {
              test : /\.css$/,
           use: ['style-loader', 'css-loader']
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        }
      ]
  },
  plugins: [new HtmlWebpackPlugin(
      {template: './front/index.html'}
  ), new CleanWebpackPlugin()]
};