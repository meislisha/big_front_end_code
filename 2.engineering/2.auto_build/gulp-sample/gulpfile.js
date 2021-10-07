// // exports.foo=(done)=>{
// //   console.log('foo task');
// //   done()
// // }
// // exports.default=(done)=>{
// //   console.log('default task');
// //   done()
// // }
// // gulp.task('bar',done=>{
// //   console.log('bar');
// //   done()
// // })

// const { series, parallel } = require('gulp')

// const task1 = (done) => {
//   setTimeout(() => {
//     console.log('task1')
//   }, 1000)
//   done()
// }
// const task2 = (done) => {
//   setTimeout(() => {
//     console.log('task2')
//   }, 1000)
//   done()
// }

// const task3 = (done) => {
//   setTimeout(() => {
//     console.log('task3')
//   }, 1000)
//   done()
// }
// exports.foo=series(task1,task2,task3)
// exports.bar=parallel(task1,task2,task3)


// exports.callback_error=(done)=>{
//   console.log('err')
//   done(new Error('lishaih'))
//   console.log('err1')
// }
// exports.promise=(done)=>{
 
//   console.log('Promise')
//   Promise.resolve()
// }

// const timeout=(time)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(resolve, time);
//   })
// }

// exports.timeout=async (donw)=>{
//   await  timeout(1000)
//   console.log(1000)
// }

// const fs=require('fs')
// exports.stream=(done)=>{
//   const readStream=fs.createReadStream('package.json')
//   const writeStream=fs.createWriteStream('cppy.json')
//   readStream.pipe(writeStream)
//   // return readStream

//   readStream.on('end',()=>{
//     done()
//   })
// }

// const fs=require('fs')
// const {Transform}=require('stream')
// exports.default=()=>{
//   const read=fs.createReadStream('test.css')
//   const write=fs.createWriteStream('test.mini.css')
//   const transform=new Transform({
//     transform:(chunk,encoding,callback)=>{
//       const input=chunk.toString()
//      const output= input.replace(/\s+/g,'').replace(/\/\*.+?\*\//g,'')
//       callback(null,output)
//     }
//   })
//   read
//   .pipe(transform)
//   .pipe(write)
//   return read
// }

const {src,dest}=require('gulp')
const cleanCss=require('gulp-clean-css')
const rename=require('gulp-rename')
exports.default=()=>{
  return src('src/*.css')
  .pipe(cleanCss())
  .pipe(rename({
    extname:'.min.css'
  }))
    .pipe(dest('dist'))
}