<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    
    <div class="page">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import { getSeller } from '@/api'
import qs from 'query-string'
export default {
  components: {
    Header
  },
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then( seller => {
      console.log(seller);
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/variable.styl'
.tab
  display: flex;
  align-items: center;
  &-wrapper
    flex: 1;
    text-align: center;
    height: 36px;
    line-height: 36px;
    a
      display inline-block
      height: 100%;
      width: 100%;
      text-decoration-line none
      color #666
    .router-link-exact-active
      color $color-red
      border-bottom: 2px solid $color-red;
</style>
