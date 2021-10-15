class Observer {
  /**
   * @param {Object} data 数据对象，由 Vue 传入
   */
  constructor (data) {
    this.walk(data)
  }

  /**
   * 遍历对象所有属性
   * @param {Object} data 数据对象
   */
  walk (data) {
    // 1. 判断 data 是否是对象
    if (!data || typeof data !== 'object') return
    // 2. 遍历对象所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  /**
   * 将属性转为 getter/setter
   * @param {Object} obj 数据对象
   * @param {string} key 属性
   * @param {*} val 值
   */
  defineReactive (obj, key, val) {
    const _this = this
    // 如果 val 是对象，把 val 内部的属性也转为 getter/setter
    this.walk(val)

    // 创建 Dep 对象，收集依赖，发送通知
    const dep = new Dep()

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        // 收集依赖
        // 判断 dep 中是否存在 target（观察者），如果存在，就添加到依赖收集中
        // target（观察者）是在创建观察者对象的时候，保存到 Dep 中的。
        Dep.target && dep.addSub(Dep.target)

        return val
      },
      set (newVal) {
        if (newVal === val) return

        val = newVal
        // 如果 newVal 是对象，把 newVal 内部的属性也转为 getter/setter
        // this.walk(newVal)
        // console.log(this)  // this 指向的是 data 对象
        _this.walk(newVal)

        // 发送通知
        dep.notify()
      }
    })
  }
}