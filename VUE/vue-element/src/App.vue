<template>
  <div class="home">
    <p>
      <router-link to="/">首页</router-link>
      |
      <router-link to="/about">关于</router-link>
    </p>
    <!-- 路由路口 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Home from './views/Home'
export default {
  data() {
    return {
      message: 'hello vue'
    }
  }
}

</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.home {
  color: red;
  text-align: center;
}
p {
  text-align: center;
}
</style>