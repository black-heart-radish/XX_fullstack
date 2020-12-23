import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Vue.use(plugin) 的一个原则是 use 对象必须具备 install 这个东西
// 插件只能被安装一次
// 要不然有 install 的对象，可以为函数， 那样那个函数就是 install

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
