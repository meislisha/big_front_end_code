const path=require('path')
module.exports = {
  entry: './src/main',
  mode: 'none',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath:'dist/'
  },
  module: {
    rules: [ // 其他资源模块加载规则的配置
      {
        test: /.css$/, // 匹配打包过程中遇到的文件路径
        use: [ // 指定匹配到的文件需要使用的 loader。
          // 如果有多个loader，webpack会从后往前执行loader（最后->第一）
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: 'file-loader'
      }
    ]
  }
}
