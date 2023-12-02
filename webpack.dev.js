const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const tmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  //   devtool: "none",  //To check it is giving error after version 5 it become more strict
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //3. Insject Styles in to DOM
          "css-loader", //2.Turn CSS in to common JS
          // TODO:
          "sass-loader", //1. Turn SASS in to CSS (Not Working)
        ],
      },
    ],
  },
});
