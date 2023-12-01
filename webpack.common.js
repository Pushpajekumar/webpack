const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  //   devtool: "none",  //To check it is giving error after version 5 it become more strict
  entry: "./src/index.js",
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
