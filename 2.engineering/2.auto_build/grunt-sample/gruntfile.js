const sass=require('sass')
module.exports=grunt=>{
  // grunt.registerTask('foo',()=>{
  //   console.log('test');
  // })
  // grunt.registerTask('bar',()=>{
  //   console.log('bar');
  // })
  // grunt.registerTask('bad',()=>{
  //  return false
  // })
  //   grunt.registerTask('async-bad',function (){
  //   const done = this.async();
  //  setTimeout(() => {
  //   console.log('async cuowu');
  //   done(false)
  //  }, 1000);
  // })
  // grunt.registerTask('default',['foo','async-bad','bar'])
  // // grunt.registerTask('async-task',function (){
  // //   const done = this.async();
  // //  setTimeout(() => {
  // //   console.log('async');
  // //   done()
  // //  }, 1000);
  // // })

  // grunt.initConfig({
  //   '22':'bar',
  //   obj:{
  //     test:1
  //   }
  // })
  // grunt.registerTask('foo',()=>{
  //   console.log(grunt.config('22'));
  //   console.log(grunt.config());
  // })
  // grunt.initConfig({
  //   build:{
  //     options:{
  //       foo:'bar'
  //     },
  //     css:{
  //       options:{
  //         foo:'css'
  //       },
  //     },
  //     js:'2'
  //   }
  // })
  // grunt.registerMultiTask('build',function(){
  //   console.log(this.options())
  //   console.log(`target:${this.target},data:${this.data}`);
  // })

  grunt.initConfig({
    clean:{
      temp:'temp/**'
    }
  })
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.initConfig({
    sass:{
      options:{
        implementation:sass
      },
      main:{
        files:{
          'dist/css/main.css':'src/main.scss'
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-sass')
}

