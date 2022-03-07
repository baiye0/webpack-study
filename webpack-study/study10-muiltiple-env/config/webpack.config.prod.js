const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMiniMizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    filename: "scripts/[name].[contenthash].js",

    publicPath: "http://localhost:8080",
  },

  mode: "production",

  optimization: {
    minimizer: [new CssMiniMizerWebpackPlugin(), new TerserPlugin()],
  },
  performance: {
    hints: false,
  },
};
