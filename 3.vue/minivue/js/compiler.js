class Compiler {
  constructor (vm) {
    this.el = vm.$el
    this.vm = vm

    // 立即编译目标
    this.compile(this.el)
  }

  /**
   * 编译模板，处理文本节点和元素节点
   * @param {dom} el 节点
   */
  compile (el) {
    // 获取 el 下所有节点, childNodes 子节点， children 子元素
    let childNodes = el.childNodes

    // 将节点伪数组转成数组，并遍历
    Array.from(childNodes).forEach(node => {      
      // 处理文本节点
      if (this.isTextNode(node)) {
        this.compileText(node)
      }
      // 处理元素节点
      else if (this.isElementNode(node)) {
        this.compileElement(node)
      }

      // 如果 node 节点有子节点，需要递归调用 compile
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  /**
   * 编译元素节点，处理指令
   * @param {htmlNode} node 需要处理的节点
   */
  compileElement (node) {
    // 获取node 的所有属性节点，
    const attributes = node.attributes
    // console.log(attributes)
    // 遍历所有属性节点
    Array.from(attributes).forEach(attr => {
      // 判断是否是指令
      let attrName = attr.name
      if (this.isEventDirective(attrName)) {
        this.registerEvent(node, attrName, attr.value)

        // 移除节点上的 特殊属性
        node.removeAttribute(attrName)
      }
      else if (this.isDirective(attrName)) {
        // 获取属性对应的值，=> data 对应的属性
        // v-text="msg"  => msg
        const key = attr.value
        
        this.update(node, key, attrName)

        // 移除节点上的 特殊属性
        node.removeAttribute(attrName)
      }
    })
  }

  /**
   * 统一管理指令内容的更新
   * @param {htmlNode} node dom 元素
   * @param {string} key 元素节点的属性值（v-text="msg" 中的 msg）
   * @param {*} attrName 元素节点的属性名（v-text="msg" 中的 text）
   */
  update(node, key, attrName) {
    // 解析出指令名，v-text ==> text
    attrName = attrName.substring(2)

    // 根据 attrName 获取对应方法
    const updateFn = this[`${attrName}Updater`]
    updateFn && updateFn.call(this, node, this.vm[key], key)
  }

  /**
   * 处理 v-text 指令
   * @param {htmlNode} node dom 元素
   * @param {*} value 指令的值
   */
  textUpdater (node, value, key) {
    node.textContent = value

    // 创建观察者对象
    new Watcher(this.vm, key, newValue => {
      node.textContent = newValue
    })
  }

  /**
   * 处理 v-model 指令
   * @param {htmlNode} node dom 元素
   * @param {*} value 指令值
   */
  modelUpdater (node, value, key) {
    // model一般用于表单元素，表单元素渲染值使用 value
    node.value = value

    // 创建观察者对象
    new Watcher(this.vm, key, newValue => {
      node.value = newValue
    })

    // 双向绑定
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }

  /**
   * 
   * @param {htmlNode}} node 元素节点
   * @param {*} value 指令值（v-on:click）
   * @param {*} key 事件名（v-on:click="clickHandler"）
   */
  registerEvent(node, value, key) {
    // v-on:click => on:click
    // value = value.split(':')[1]
    // 获取事件类型
    const eventType = this.getEventType(value)
    let params = void 0

    // 判断是否是传参形式的方法调用 v-on:clickHandler(1, 3)
    if (key.endsWith(')')) {
      // 获取事件处理函数名
      key = key.replace(/\((.*?)\)$/, '')
      // 获取参数
      params = RegExp.$1.split(',').map(p => p.trim())
    }
    // 为元素注册事件
    node.addEventListener(eventType, () => this.vm.$methods[key].apply(this.vm, params))
  }

  /**
   * 编译文本节点，处理插值表达式
   * @param {htmlNode} node 需要处理的节点
   */
  compileText (node) {
    // console.dir(node)
    // 判断是否是插值表达式 {{ msg }}
    // 匹配差值表达式，并提取出变量名
    const reg = /\{\{(.+?)\}\}/
    // 获取文本节点内容
    const value = node.textContent
    if (reg.test(value)) {
      // 获取匹配到的内容，并进行去空格处理
      const key = RegExp.$1.trim()
      // 将原来的内容，替换成变量对应的值
      node.textContent = value.replace(reg, this.vm[key])

      // 创建 Watcher 观察者对象
      new Watcher(this.vm, key, newValue => {
        node.textContent = newValue
      })
    }
  }

  /**
   * 判断元素属性是否是指令
   * @param {string} attrName 属性名
   */
  isDirective (attrName) {
    return attrName.startsWith('v-')
  }

  /**
   * 判断是否是事件类型的指令
   * @param {*} attrName 属性名
   */
  isEventDirective (attrName) {
    return attrName.startsWith('v-on:') || attrName.startsWith('@')
  }

  /**
   * 获取事件类型
   * @param {*} attrName 属性名
   */
  getEventType (attrName) {
    return attrName.startsWith('v-on:')
      ? attrName.substring(5)
      : attrName.substring(1)
  }

  /**
   * 判断是否是文本节点
   * @param {htmlNode} node 需要判断的节点
   */
  isTextNode (node) {
    return node.nodeType === 3
  }

  /**
   * 判断是否是元素节点
   * @param {htmlNode} node 需要判断的节点
   */
  isElementNode (node) {
    return node.nodeType === 1
  }
}
