const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: { app: "./src/index.js"},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: 'development'
};