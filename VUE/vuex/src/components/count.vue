<template>
  <div class="count">
    <!-- state里面的可以这样直接用 -->
    <h3>{{$store.state.a.count}}</h3>
    <!-- <h2>{{newCount}}</h2> -->
    <h2>{{count}}</h2>
    <h1>{{newCount}}</h1>
    <p>
      <!-- mutations里面的需要提交commit -->
      <!-- <button @click="$store.commit('add',10)">add</button> -->
      <!-- <button @click="addAction(5)">add</button> -->
      <button @click="add(5)">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
    </p>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  // computed: {
  //   newCount () {
  //     return this.$store.state.count * 2
  //   }
  // }

  data () {
    return {
      msg: ''
    }
  },

  // computed: mapState({
  //   newCount: state => state.count * 3
  // })

  // computed: mapState(['count']),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },

  // methods: mapMutations(['add', 'reduce'])
  methods: {
    test () {

    },
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>