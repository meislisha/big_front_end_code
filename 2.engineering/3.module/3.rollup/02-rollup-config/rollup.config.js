/**
 * rollup.config.js 是运行在 nodejs 环境下的，
 * 但是 rollup 会额外处理这个文件，
 * 所以我们可以直接使用 es modules 模式写
 */

// 导出一个配置对象
export default {
  input: './src/index.js', // 指定入口
  output: { // 指定输出，要求是一个对象
    file: 'dist/bundle.js', // 输出文件
    format: 'iife' // 输出格式
  }
}
