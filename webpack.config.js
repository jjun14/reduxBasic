var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  module: {
    preloaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      }
    ]
  },
}

if(TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devServer: {
      devtool: 'eval-source-map',
      contentBase: PATHS.build,
      historyApiFallback: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      HTMLWebpackPluginConfig,
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build'){
  module.exports = merge(common, {
    plugins: [
      HTMLWebpackPluginConfig,
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
