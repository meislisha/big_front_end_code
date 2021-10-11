let _Vue = null

export default class VueRouter {
  static install (Vue) {
    // 1. 判断是否已经注册过 VueRouter
    if (VueRouter.install.insatlled) return
    // 标识已经注册过 VueRouter
    VueRouter.install.insatlled = true
    // 2. 把 Vue 构造函数挂载到全局
    _Vue = Vue
    // 3. 把创建 Vue 实例时传入的 router 配置对象 挂载到所有的 Vue 实例上
    // 获取 传入的 router 对象： this.$options.router。this 就是 vue 实例
    // 因为要使用 vue 实例，可以使用 Vue.mixin 方法注入，
    _Vue.mixin({
      // 在 beforeCreate 钩子函数中 将 router 挂载到 vue 实例上
      beforeCreate () {
        // 只对 vue 实例进行挂载，不对组件挂载
        // 只有 vue 实例中有 router： new Vue({ router })
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router

          // 调用 VueRouter 的 init 方法
          this.$options.router.init()
        }
      }
    })
  }

  /**
   * VueRouter 构造函数，接收一个包含了 routes 路由规则的配置选项
   * 用于初始化 options、data、routerMap属性
   * 返回 VueRouter
   * @param {Object} options 配置选项
   * @returns VueRouter
   */
  constructor (options) {
    this.options = options
    this.routeMap = {}
    // 使用 Vue 的静态方法 observable 方法注册响应式对象
    this.data = _Vue.observable({
      // 保存当前路由地址。默认为首页
      current: '/'
    })
  }

  /**
   * 包装 createRouteMap 方法和 initComponents 方法
   */
  init () {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }

  /**
   * 解析路由规则
   */
  createRouteMap () {
    // 将 routes 路由规则转换为 键值对的形式，保存到 routeMap 中
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  /**
   * 注册 ruoter-link 和 router-view 组件
   */
  initComponents (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      // 运行时版本的 vue 不支持 template 选项
      // template: '<a :href="to"><slot></slot></a>'
      // 可以直接写 render 方法
      render (h) {
        // h 接收3个参数：选择器，为这个选择器添加的属性，选择器下的子元素
        return h('a', {
          attrs: { // DOM 属性
            href: this.to
          },
          on: { // 注册事件
            click: this.clickHandler
          }
        }, [this.$slots.default])
      },
      methods: {
        clickHandler (e) {
          // 使用 pushStatus 修改地址
          history.pushState({}, '', this.to)
          // 修改当前路由地址
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })

    const self = this
    Vue.component('router-view', {
      render (h) {
        // 获取当前路由地址对应的组件
        const component = self.routeMap[self.data.current]
        // 将组件渲染成虚拟DOM 并返回
        return h(component)
      }
    })
  }

  initEvent () {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
