// document.getElementById('app').innerHTML = 'hello webpack'
// document.getElementById('app').addEventListener('click', () => {
//   console.log(123);
// })


// let str = 'babel',
//     func = s => {
//       document.getElementById('app').innerHTML = `hello ${s}`
//     }

// func(str)


import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   comments: {App}
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

