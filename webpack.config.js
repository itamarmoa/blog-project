var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[hash].js",
    publicPath: "/"
  },

  module: {
    rules: [
      // Allow `require`ing JSON files as objects
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"]
        })
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },

      // Allow `require`ing image/font files (also when included in CSS)
      // Inline assets under 5kb as Base64 data URI, otherwise uses `file-loader`
      {
        test: /\.(eot|woff2?|ttf|otf)(\?.*)?$/i,
        use: {
          loader: "file-loader",
          query: {
            name: "[name]-[hash].[ext]"
          }
        }
      },

      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          query: {
            name: "[name]-[hash].[ext]"
          }
        },
      }
    ]
  },

  devtool: "source-map",

  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        secure: false
      },
      '/data': {
        target: 'http://localhost:9090',
        secure: false
      }
    }
  },

  plugins: [
    // new CopyWebpackPlugin([
    //   {from:'data',to:'data'}
    // ]),

    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),

    new ExtractTextPlugin("styles.css")
  ]

};
