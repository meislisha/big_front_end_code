const path=require('path');
const { Compiler, Compilation } = require('webpack');

class MyPlugin{
  apply(complier){
    console.log('myplugin 启动');
    complier.hooks.emit.tap('MyPlugin',compilation=>{
      for(const name in compilation.assets){
        // console.log(name)
        if(name.endsWith('.js')){
          const contents=compilation.assets[name].source()
          const withoutComments=contents.replace(/\/\*+\*\//g,'')
          compilation.assets[name]={
            source:()=> withoutComments,
            size:()=>withoutComments.length
          }
        }
      }
    })
  }
}
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
        
      },
      {
       test:/.md$/,
       use:[
         'html-loader',
        './markdown-loader'
       ]
      }
    ]
  },
  plugins:[
    new MyPlugin()
  ]
}
