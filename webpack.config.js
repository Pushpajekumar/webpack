const path = require("path");

module.exports = {
  mode: "development",
  //   devtool: "none",  //To check it is giving error after version 5 it become more strict
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", //3. Insject Styles in to DOM
          "css-loader", //2.Turn CSS in to common JS
          "sass-loader", //1. Turn SASS in to CSS
        ],
      },
    ],
  },
};
