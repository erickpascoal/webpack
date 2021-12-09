const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const bundlePath = path.resolve(__dirname, "public");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: bundlePath,
    filename: "main.js",
  },
  mode: "development",
  devServer: {
    static: {
      directory: bundlePath,
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(bundlePath, "index.html"),
    }),
  ],
};
