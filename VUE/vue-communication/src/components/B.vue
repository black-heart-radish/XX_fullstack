<template>
  <div class="b">
    bbbb
    {{msg}}
  </div>
</template>

<script>
import Bus from '@/bus/index'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendA', (e) => {
      // console.log(e);
      this.msg = e
    })
  }
}
</script>

<style>

</style>