<template>
  <div id="app">
    <!-- <Hi @sendHi="getHi" />
    <h2>{{fromChild}}</h2>
    <img alt="Vue logo" src="./assets/logo.png">
    <Hello :message="title" @sendData="getData" :fromHi="fromHi" /> -->
    <A/>
    <B/>
  </div>
</template>

<script>
// import Hello from '@/components/Hello'
// import Hi from '@/components/Hi'

import A from '@/components/A'
import B from '@/components/B'
export default {
  name: 'App',
  // data () {
  //   return {
  //     title: '我爱我的祖国',
  //     fromChild: '',
  //     fromHi: ''
  //   }
  // },
  // components: {
  //   Hello,
  //   Hi
  // },
  // methods: {
  //   getData (e) {
  //     // console.log(e);
  //     this.fromChild = e;
  //   },
  //   getHi (e) {
  //     this.fromHi = e
  //     // console.log(this.fromHi);
  //   }
  // }

  components: {
    A,
    B
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
