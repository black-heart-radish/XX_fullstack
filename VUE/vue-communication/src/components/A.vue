<template>
  <div class="a">
    aaaa
    <button @click="sendA">click</button>
  </div>
</template>

<script>
import Bus from '@/bus/index'
export default {
  data () {
    return {
      item: '我是组件A里面的数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA', this.item)
    }
  }
}
</script>

<style>

</style>