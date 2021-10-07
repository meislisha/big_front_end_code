const Generator=require('yeoman-generator')

module.exports=class extends Generator{
  prompting(){
    return this.prompt([
      {
        type:'input',
        name:'name',
        message:'enter your name',
        default:this.appname
      },
      {
        type:'input',
        name:'title',
        message:'enter your title',
        default:this.appname
      },
    ]).then(answers=>{
      this.answers=answers
    })
  }
  writing(){
    const templ=this.templatePath('index.html')
    const output=this.destinationPath('index.html')
    const context= { name: 'hello xm~', success: true}
    // this.fs.copyTpl(templ,output,context)
    this.fs.copyTpl(templ,output,this.answers)
    // this.fs.write(this.destinationPath('temp.txt'),Math.random().toString())
  }
}