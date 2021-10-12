class Watcher{
  constructor(vm,key,cb){
    this.vm=vm,
    this.key=key
    this.cb=cb
    Dep.target=this
    this.oldVlue=vm[key]//触发了getter，将watcher放入了addSub中
    Dep.target=null
  }
  update(){
    const newVal=this.vm[this.key]
    if(newVal===this.oldVlue){
      return
    }
    this.cb(newVal)
  }
}