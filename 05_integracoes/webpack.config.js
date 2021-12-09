const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[contenthash].js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Itegrações",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};