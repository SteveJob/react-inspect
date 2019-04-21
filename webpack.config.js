const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin('index.css');

const __DEV__ = process.env.NODE_ENV === 'development';

const config = {
  mode: __DEV__ ? 'development' : 'production',
  entry: {
    index: './index.jsx',
    backend: './backend.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.less', '.css', 'scss'],
    alias: {
      frontend: path.resolve(__dirname, 'app/frontend'),
      agent: path.resolve(__dirname, 'app/agent'),
      plugins: path.resolve(__dirname, 'app/plugins'),
      backend: path.resolve(__dirname, 'app/backend'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
          plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: 'css' }],
            '@babel/plugin-transform-flow-strip-types',
            ['@babel/plugin-proposal-class-properties', { "loose": false }]
          ]
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