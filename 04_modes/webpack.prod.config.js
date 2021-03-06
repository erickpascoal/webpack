const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",

  plugins: [
    // new TerserPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Modes",
    }),
  ],
};
