const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    publicPath: './' // 静态资源CDN地址
  },
  devtool: 'cheap-module-source-map',
  mode: 'production',
  plugins: [
    // 清空dist文件夹
    new CleanWebpackPlugin(['dist']),
    new webpack.HashedModuleIdsPlugin(),
    // 如果是多页面的html，则多次new HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // html模板，如设置该参数，则按该模板来，忽略下面的title参数
      title: 'webpack demo', // html标题
      filename: 'index.html', // 生成html的名称，默认index.html
      chunks: ['index', 'vendor'], // 指定引入文件，默认引入所有
      minify: { // 压缩，默认false
        removeAttributeQuotes: true // 移除属性的引号
      }
    })
  ]
});
