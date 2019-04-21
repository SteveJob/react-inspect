const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin('index.css');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'assets/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.jsx', '.less', '.css', 'scss', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: extractLess.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
              }
            },
            'less-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    extractLess
  ]
}