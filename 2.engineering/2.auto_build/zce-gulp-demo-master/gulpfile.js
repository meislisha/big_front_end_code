const { src, dest, parallel, series, watch } = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const del = require('del')
const bs = require('browser-sync')
// const sass=require('gulp-sass')
// const babel=require('gulp-babel')
// const plugins.swig=require('gulp-swig')
// const imagemin=require('gulp-imagemin')
const plugins = loadPlugins()

const data = require('./data')
// const style=()=>{
//   return src('src/assets/styles/*.scss',{base:'src'})
//   .pipe(plugins.sass({outputStyle:'expanded'}))
//   .pipe(dest('temp'))
//   .pipe(bs.reload({stream:true}))
// }

const script = () => {
  return (
    src('src/assets/scripts/*.js', { base: 'src' })
      // 编译脚本文件, 需要指定 presets, 否则不会对 ECMAScript 新特性进行转化
      .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
      .pipe(dest('temp'))
  )
}

const page = () => {
  return (
    src('src/**/*.html', { base: 'src' })
      // 编译脚本文件, 需要指定 presets, 否则不会对 ECMAScript 新特性进行转化
      .pipe(plugins.swig({ data: data }))
      .pipe(dest('temp'))
  )
}

const image = () => {
  return src('src/assets/images/*.png', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}
// 字体文件
const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const extra = () => {
  return src('public/**', { base: 'public' }).pipe(dest('dist'))
}

const clean = () => {
  return del(['dist', 'temp'])
}
// const compile=parallel(
//   // style,  报错，先放弃
//   script,page,image,font)
const serve = () => {
  // watch('src/assets/styles/*.scss', style);
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)

  // watch('src/assets/images/**', image);
  // watch('src/assets/fonts/**', font);
  // watch('public/**', extra);
  bs.init({
    notify: false,
    port: 3000,
    // files: 'dist/**',
    server: {
      baseDir: ['temp', 'src', 'public'], //r
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}
const useref = () => {
  return (
    src('temp/*.html', { base: 'temp' })
      // searchPath: 在哪里寻找需要合并的文件（根据资源引用的起始路径）
      .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
      .pipe(plugins.if(/\.js$/, plugins.uglify()))
      .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
      .pipe(
        plugins.if(
          /\.html$/,
          plugins.htmlmin({
            collapseWhitespace: true, // 折叠(去掉)空白符和换行符
            minifyCSS: true, // 压缩html文件中的 css样式
            minufyJS: true, // 压缩 html文件的 js文件
          })
        )
      )
      .pipe(dest('dist'))
  )
}
const compile = parallel(script, page)

// const build=parallel(compile,extra)
const build = series(
  clean,
  parallel(
    series(compile, useref), 
    font, 
    image,
    extra
    )
)
const develop = series(compile, serve)
module.exports = {
  clean,
  build,
  develop,
}
