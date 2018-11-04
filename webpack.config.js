'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        index: './src/index.ts'
    },

    module: {
        rules: [
          {
              test: [ /\.vert$/, /\.frag$/ ],
              use: 'raw-loader'
          },

          {
              test: /\.(js|ts)$/,
              include: path.resolve(__dirname, 'src/'),
              exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader'
              }
            ]
          }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 1
                }
            }
        }
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].js'
    },

    performance: {
        hints: false
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
