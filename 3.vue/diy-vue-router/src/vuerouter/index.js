let _Vue = null
export default class VueRouter {
  static install (Vue) {
    // 1. 判断当前插件是否被安装
    if (VueRouter.install.installed) return
    VueRouter.install.installed = true
    // 2. 把Vue构造函数记录到全局变量
    _Vue = Vue
    //  3. 把创建Vue实例时候传入的router注入到Vue实例
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routeMap = {}
    this.data = _Vue.observable({
      current: '/'
    })
  }

  init () {
    this.createRouterMap()
    this.initComponent(_Vue)
    this.initEvent()
  }
  createRouterMap () {
    // 遍历所有路由规则，把路由规则解析成键值对的形式，存储到routeMap中
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  initComponent (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      // template: '<a :href="to"><slot></slot></a>'
      render (h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.clickPrevent
          }
        }, [this.$slots.default])
      },
      methods: {
        clickPrevent (e) {
          history.pushState({}, '', this.to)
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })
    const self = this
    Vue.component('router-view', {
      render (h) {
        const comp = self.routeMap[self.data.current]
        return h(comp)
      }
    })
  }
  initEvent () {
    window.addEventListener('popstate',()=>{
      this.data.current=window.location.pathname
    })
  }
}
