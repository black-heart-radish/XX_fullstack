<template>
  <div>
    <div class="shop-cart">
      <div class="content" @click.stop="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight: totalCount > 0}">
              <i class="icon-shopping_cart" :class="{highlight: totalCount > 0}"></i>
            </div>
            <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight: totalCount > 0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}</div>
        </div>
        <div class="content-right" :class="{highlight: totalPrice >= minPrice}">
          <!-- <div class="pay final" v-if="totalPrice >= 20">去结算</div>
          <div class="pay" v-else>还差{{minPrice - totalPrice}}元起送</div> -->
          <div class="pay" :class="{final: totalPrice >= minPrice}">{{payDesc}}</div>
        </div>
      </div>
      <!-- 购物车列表 -->
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click.stop="emptyCart">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="item in selectFoods" :key="item.name">
                <span class="name">{{item.name}}</span>
                <div class="price">
                  <span>￥{{item.price * item.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="item"></CartControl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CartControl from '@/components/cart-control/Cart-control'
import BScroll from 'better-scroll'
export default {
  props: {
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 30
    }
  },
  components: {
    CartControl
  },
  data () {
    return {
      fold: false
    }
  },
  computed: {
    totalCount () {
      let totalCount = 0
      this.selectFoods.forEach((food) => {
        totalCount += food.count
      })
      return totalCount
    },
    totalPrice () {
      let totalPrice = 0
      this.selectFoods.forEach( food => {
        totalPrice += food.price * food.count
      })
      return totalPrice
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `${this.minPrice}元起送`
      }else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差${diff}元起送`
      } else {
        return '去结算'
      }
    },
    listShow () {
      if (!this.totalCount) {
        this.fold = true
        return false
      }
      let show = !this.fold
      if (show) {
        this.$nextTick(() => {
          if (!this.listShow) {
            this.scroll = new BScroll(this.$refs.listContent, {
            click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
      return show
      // if (this.totalCount > 0) {
      //   return true
      // } else {
      //   return false
      // }
    }
  },
  methods: {
    toggleList () {
      if (this.selectFoods.length === 0) return ;
      this.fold = !this.fold
      this.$nextTick(() => {
        if (this.listShow) {
          this.scroll = new BScroll(this.$refs.listContent, {
          click: true
          })
        }
      })
    },
    emptyCart () {
      this.fold = false
      this.selectFoods.forEach( food => {
        food.count = 0
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
.shop-cart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height: 48px;
  .content
    display flex
    background $color-background
    color $color-light-grey
    &-left
      flex 1
      .logo-wrapper
        vertical-align middle
        display inline-block
        position relative
        top: -10px;
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        border-radius 50%
        box-sizing border-box
        background #141d27
        .logo
          width 100%
          height 100%
          background $color-dark-grey
          border-radius 50%
          text-align center
          &.highlight
            background $color-blue
          .icon-shopping_cart
            line-height 44px
            font-size $fontsize-large-xxx
            color #80858a
            &.highlight
              color $color-white
        .num
          position absolute
          top 0
          right 0
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size $fontsize-small-s
          font-weight bold
          color $color-white
          background $color-red
      .price
        display inline-block
        line-height 48px
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size $fontsize-large
        font-weight 700
        &.highlight
          color $color-white
      .desc
        display inline-block
        line-height: 48px;
        font-size $fontsize-small-s
    .content-right
      flex 0 0 105px
      width: 105px;
      background-color: #141d27;
      .pay
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: $fontsize-small;
        font-weight 700
        &.final
          color $color-white
          font-size: $fontsize-large;
      &.highlight
        background-color: $color-green;
  .shopcart-list
    position: absolute;
    left: 0;top: 0;
    width: 100%;
    transform translate3d(0, -100%, 0)
    z-index: -99;
    &.fold-enter-active, &.fold-leave-active
      transition all 0.5s
    &.fold-enter, &.fold-leave-to
      transform translate3d(0, 0, 0)
    .list-header
      display: flex;
      justify-content space-between
      padding: 0 18px;
      align-items: center;
      height: 40px;
      line-height: 40px;
      border-bottom: 2px solid $color-background-sss;
      background-color: $color-background-ssss;
      .title
        font-size: $fontsize-medium;
        color $color-background
      .empty
        font-size: $fontsize-small;
        color $color-blue
    .list-content
        padding 0 18px
        max-height 217px
        overflow hidden
        background #fff
        .food
          position relative
          padding 12px 0
          box-sizing border-box
          .name
            line-height 24px
            font-size 14px
            color rgb(7, 17, 27)
          .price
            position absolute
            right 90px
            bottom 12px
            line-height 24px
            font-size 14px
            font-weight 700
            color rgb(240, 20, 20)
          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 6px
</style>