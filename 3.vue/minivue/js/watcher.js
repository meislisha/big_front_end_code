class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    // data 中的属性名
    this.key = key
    // 回调函数，负责更新视图
    this.cb = cb

    // 把 watcher 对象记录到 Dep 类的静态属性 target 中
    Dep.target = this
    // 触发 get 方法，在 get 方法中收集该 watcher
    // vm[key] 就是在访问某一个属性，访问某一个属性就会触发 get 方法
    // 保存更新前的数据
    this.oldValue = vm[key]

    // 防止后面重复添加（前面触发 get 的时候已经将 target 存储到 subs 中了）
    Dep.target = null
  }

  /**
   * 当数据发生变化的时候更新视图
   */
  update () {
    // 获取到最新的数据
    const newVal = this.vm[this.key]

    if (newVal === this.oldValue) return

    // 更新视图，并将最新的值传入
    this.cb(newVal)
  }
}