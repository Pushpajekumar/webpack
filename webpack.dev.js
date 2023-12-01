const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  //   devtool: "none",  //To check it is giving error after version 5 it become more strict
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
});
