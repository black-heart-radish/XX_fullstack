<template>
  <div class="home">这是home页面
      <p>
          <router-link to="/home1">首页一</router-link>
          |
          <router-link to="/home2">首页二</router-link>
      </p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>