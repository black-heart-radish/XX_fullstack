<template>
  <div class="hi">
    <p @click="sendHi">{{hi}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: 'hi! 傻逼',
      hiMsg: '你是Hi里面的憨憨'
    }
  },
  methods: {
    sendHi () {
      this.$emit('sendHi', this.hiMsg)
    }
  }
}
</script>

<style>

</style>