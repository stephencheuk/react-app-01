/* config-overrides.js */

var path = require('path');

module.exports = function override(config, env) {
  // 参数中的 config 就是默认的 webpack config
  
  // 对 config 进行任意修改
  config.mode = 'development';

    // allows us to do absolute imports from "src"
  config.resolve.modules = [path.join(__dirname, 'src'), 'node_modules'];
  config.resolve.extensions = ['*', '.js', '.jsx'];


  // 一定要把新的 config 返回
  return config;
}