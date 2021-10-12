
class Compiler {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    this.compiler(this.el)
  }

  compiler(el) {
    let childNodes = el.childNodes
    Array.from(childNodes).forEach((node) => {
      if (this.isElementNode(node)) {
        this.compileElement(node)
      } else if (this.isTextNode(node)) {
        this.compileText(node)
      }
      if (node.childNodes && node.childNodes.length) {
        this.compiler(node)
      }
    })
  }
  compileElement(node) {
    Array.from(node.attributes).forEach(attr=>{
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        // 解析出指令名，v-text ==> text
        attrName = attrName.substring(2)
        // 获取属性对应的值，=> data 对应的属性
        // v-text="msg"  => msg
        const key = attr.value

        this.update(node, key, attrName)
      }
    })
  }
  update(node,key,attrname){
    let fn=this[attrname+'Updater']
    fn&&fn.call(this,node,key,this.vm[key])
   
  }
  textUpdater(node,key,value){
    console.log(this)
    node.textContent=value
    new Watcher(this.vm,key,(newVal)=>{
      node.textContent=newVal
    })
  }
  modelUpdater(node,key,value){
    node.value=value
    new Watcher(this.vm,key,(newVal)=>{
      node.value=newVal
    })
    node.addEventListener('input',()=>{
      this.vm[key]=node.value
    })
  }
  compileText(node) {
    // console.dir(node);
    //.:匹配任意的单个字符，不包括换行
    //+：1或多次
    //?：非贪婪模式，尽可能早的结束这个匹配
    //()：()在正则中有分组的含义，很容易获取分组中匹配到的结果
    const reg = /\{\{(.+?)\}\}/
    const value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
      new Watcher(this.vm,key,(newVal)=>{
        console.log('vb')
        node.textContent=newVal
      })
    }
  }
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
  isTextNode(node) {
    return node.nodeType === 3
  }
}
