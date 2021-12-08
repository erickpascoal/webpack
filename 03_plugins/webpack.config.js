const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const DotEnvPlugin = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  //   optimization: {
  //     minimize: true,
  //     minimizer: [new TerserPlugin()],
  //   },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("1.0.2"),
      AUTOR: JSON.stringify("Erick"),
    }),
    new DotEnvPlugin(),
  ],
};
