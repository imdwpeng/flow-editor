/*
 * @Author: Dong
 * @Date: 2020-09-06 10:07:19
 * @LastEditors: Dong
 * @LastEditTime: 2020-09-07 09:15:50
 */
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod');

const spinner = ora('webpack编译开始...\n').start();

webpack(webpackConfig, function (err, stats) {
  if (err) {
    spinner.fail('编译失败');
    console.log(err);
    return;
  }
  spinner.succeed('编译结束!\n');

  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  );
});