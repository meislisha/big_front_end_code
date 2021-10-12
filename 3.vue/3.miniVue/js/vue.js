class Vue {
  constructor(options) {
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el =
      typeof options.el === 'string'
        ? document.querySelector(options.el)
        : options.el
    this._proxyData(this.$data)
    new Observar(this.$data)
    new Compiler(this)
  }
  _proxyData(data) {
    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key]
        },
        set(val) {
          if (data[key] === val) return
          data[key] = val
        }
      })
    })
  }
}
