const path = require("path");

module.exports = {
  mode: "development",
  //   devtool: "none",  //To check it is giving error after version 5 it become more strict
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
