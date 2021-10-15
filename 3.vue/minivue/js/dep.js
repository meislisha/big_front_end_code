/**
 * 收集依赖，发送通知
 */
class Dep {
  constructor () {
    // 用于存储所有的观察者
    this.subs = []
  }

  /**
   * 添加观察者
   * @param {Watcher} sub 观察者
   */
  addSub (sub) {
    // 判断是否为观察者：约定要有一个 update 方法
    if (!sub || !sub.update) return

    this.subs.push(sub)
  }

  /**
   * 发送通知
   */
  notify () {
    // 遍历 subs 中所有的观察者，然后调用他们的 update 方法
    this.subs.forEach(sub => sub.update())
  }
}