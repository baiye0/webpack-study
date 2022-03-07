const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMiniMizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  console.log(env);
  return {
    entry: {
      index: "./src/index.js",
      // another: "./src/another-module.js",
    },

    output: {
      filename: "scripts/[name].[contenthash].js",
      path: path.resolve(__dirname, "./dist"),
      clean: true,
      assetModuleFilename: "images/[contenthash][ext]",
      publicPath: "http://localhost:8080",
    },

    mode: env.production ? "production" : "development",

    devtool: "inline-source-map",

    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "app.html",
        inject: "body",
      }),
      new MiniCssExtractPlugin({
        filename: "styles/[contenthash].css",
      }),
    ],

    devServer: {
      static: "./dist",
    },

    module: {
      rules: [
        {
          test: /\.png/,
          type: "asset/resource",
          generator: {
            filename: "images/[contenthash][ext]",
          },
        },
        {
          test: /\.(css|less)/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [["@babel/plugin-transform-runtime"]],
            },
          },
        },
      ],
    },
    optimization: {
      minimizer: [new CssMiniMizerWebpackPlugin(), new TerserPlugin()],
      // splitChunks: {
      //   chunks: "all",
      // },

      splitChunks: {
        //缓存第三方
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    performance: {
      hints: false,
    },
  };
};
