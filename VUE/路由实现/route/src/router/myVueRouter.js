let Vue = null

class HistoryRoute {
  constructor () {
    this.current = null
  }
}

class VueRouter {
  constructor (options) {
    this.mode = options.mode || 'hash',
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute() // 装当前路由的状态，并且要 响应式 的
    this.init()
  }

  // 路由初始化
  init () {
    if (this.mode == 'hash') { // hash 模式
      location.hash ? '' : location.hash = '/'
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1) // 把 hash 前的 # 切掉
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1) // 把 hash 前的 # 切掉
      })
    } else { // history 模式
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }

  createMap (routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component // {'/home': Home}
      return pre
    }, {})
  }
}

VueRouter.install = function (v) {
  Vue = v
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) { // 如果是根组件
        this._root = this
        this._router = this.$options.router

        // 做 history 的响应式
        Vue.util.defineReactive(this, 'xxx', this._router.history) // defineReactive ： Vue 里面的观察者，让他是响应式的
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root
      }
      Object.defineProperty(this, '$router', { // defineProperty 对象拦截，第二个参数如果有就执行get与set，没有就加上这个属性在get与set
        get () {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get () {
          return this._root._router.history.current
        }
      })
    },
  })
  Vue.component('router-link', {
    props: {
      to: String
    },
    render(h) {
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to : this.to
      return h('a', {attrs: {href: to}}, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render(h) {
      let current = this._self._root._router.history.current // _self 是 render 的 proxy 代理对象，代理到 router 身上去了
      let routeMap = this._self._root._router.routesMap
      return h (routeMap[current])
    }
  })
}

export default VueRouter


// class Vue {
//   constructor () {
//     _installedPlugins: ''
//   }
// }


// Vue.use = function (plugin) {
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins == []))
//   if (installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }
//   const args = toArray(arguments, 1)
//   args.unshift(this)
//   if (typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args)
//   } else if (typeof plugin === 'function') {
//     plugin.apply(null, plugin, args)
//   }
//   installedPlugins.push(plugin)
//   return this
// }