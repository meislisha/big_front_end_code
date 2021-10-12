class Observar{
  constructor(data){
    this.walk(data)
  }
  walk(data){
    if(!data||typeof data!=='object') return
    Object.keys(data).forEach(key=>{
      this._defineReactive(data,key,data[key])
    })
  } 
  _defineReactive(data,key,val){
    this.walk(val)
    const dep=new Dep()
    const _this=this
    Object.defineProperty(data,key,{
      enumerable:true,
      configurable:true,
      get(){
        Dep.target&&dep.addSubs(Dep.target)
        return val
      },
      set(newVal){
        if(val===newVal) return
         val=newVal
        _this.walk(newVal)
        dep.notify()
      }
    })
  }
}