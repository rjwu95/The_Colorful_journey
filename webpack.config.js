const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.npm_lifecycle_event === 'build'

module.exports = {
  entry: "./src",
  devtool: !isProduction && "source-map",
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: isProduction && {
        removeComments: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        inlineSource: ".(js)$",
      },
    }),
    new ZipPlugin({ filename: "bundle.zip" })
  ],
    optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            properties: {
              keep_quoted: true,
            },
          },
        },
      }),
    ],
  },
  devServer: {
    stats: 'minimal',
    overlay: true
  }
};
