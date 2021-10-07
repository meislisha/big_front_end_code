module.exports=plop=>{
  plop.setGenerator('component',{
    prompts:[
      {
        type:'input',
        name:'name',
        message:'enter your component name'
      }
    ],
    actions:[
      {
        type:'add',
        path:'src/component/{{name}}/{{name}}.css',
        templateFile:'plop-templates/components.css.hbs'
      }
    ]
  })
}