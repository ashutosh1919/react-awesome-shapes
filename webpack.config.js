const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'index.js',
    clean: true
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env'],
            '@babel/preset-typescript',
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
                importSource: 'react'
              }
            ]
          ],
          plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread']
        }
      },
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      favicon16: './public/favicon-16x16.png',
      favicon32: './public/favicon-32x32.png',
      manifest: './public/manifest.json'
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
        // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      }
    })
  ]
};

module.exports = config;
