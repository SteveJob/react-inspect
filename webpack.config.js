const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin('index.css');

const __DEV__ = process.env.NODE_ENV === 'development';

const config = {
  mode: __DEV__ ? 'development' : 'production',
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
      },
      {
        test: /\.css$/,
        use: extractLess.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    extractLess
  ]
};

if (__DEV__) {
  config.devtool = 'cheap-source-map';
}

module.exports = config;