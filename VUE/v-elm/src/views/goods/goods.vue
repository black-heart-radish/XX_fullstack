<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="(item, index) in goods" :key="index" @click="selectMenu(index)" :class="{current: currentIndex === index}">
            <span class="text">
              <!-- <span class="icon" v-if="item.type > 0"></span> -->
              <SupportIco v-if="item.type > 0" :size=3 :type="item.type"></SupportIco>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list" v-for="(item, index) in goods" :key="index" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="(item1, index1) in item.foods" :key="index1">
                <div class="icon">
                  <img :src="item1.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{item1.name}}</h2>
                  <p class="desc">{{item1.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{item1.sellCount}}份</span>
                    <span>好评率{{item1.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{item1.price}}</span>
                    <span class="old" v-if="item1.oldPrice">￥{{item1.oldPrice}}</span>
                  </div>
                  <!-- + -->
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="item1"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 购物车 -->
    <ShopCart :selectFoods="selectFoods" 
    :deliveryPrice="seller.deliveryPrice"
    :minPrice="seller.minPrice"></ShopCart>
  </div>
</template>

<script>
import { getGoods } from '@/api'
import SupportIco from '@/components/support-ico/Support-ico'
import ShopCart from '@/components/shop-cart/Shop-cart'
import CartControl from '@/components/cart-control/Cart-control'
import BScroll from 'better-scroll'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      // currentIndex: 0,
      listHeight: [],
      scrollY: 0
    }
  },
  components: {
    SupportIco,
    ShopCart,
    CartControl
  },
  computed: {
    currentIndex () {

      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if ( !height2 || (this.scrollY >= height1 && this.scrollY < height2) ) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      for (let good of this.goods) {
        if (good.foods) {
          for (let food of good.foods) {
            if (food.count) {
              foods.push(food)
            }
          }
        }
      }
      return foods
    }
  },
  created () {
    getGoods().then(res => {
      console.log(res);
      this.goods = res
      // this.$nextTick() 只会在DOM渲染完成后执行
      this.$nextTick(() => {
        this._initScroll()
        this._calculateHeight()
      }) 
    })
  },
  methods: {
    selectMenu (index) {
      // console.log(index);
      // this.currentIndex = index

      let foodList = this.$refs.foodList
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },
    _initScroll() {
      // 左侧的滚动
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      // console.log(this.menuScroll);
      // 右侧的滚动
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      // on 监听滚动事件
      this.foodsScroll.on('scroll', pos => {
        // console.log(pos);
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        // 计算某一个DOM结构的高度
        height += item.clientHeight
        this.listHeight.push(height)
      }
      console.log(this.listHeight);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
.goods
  display: flex;
  position: absolute;
  top: 176px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper
    flex 0 0 80px
    width: 80px;
    background: #f3f5f7;
    .menu-item
      display: flex;
      width: 60px;
      height: 54px;
      padding: 0 10px;
      line-height: 14px;
      align-items: center;
      font-size: $fontsize-small;
      text-align: center;
      justify-content: center;
      &.current
        background: #fff;
        font-weight: 700;
  .foods-wrapper
    flex 1
    .title
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: $fontsize-small;
      color rgb(147, 153, 159)
      background-color: $color-background-ssss;
    .food-item
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      position: relative;
      &:last-child
        margin-bottom: 0;
      .icon
        flex 0 0 57px
        margin-right: 10px;
        img
          width: 100%;
      .content 
        flex 1
        .name 
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra 
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc 
          line-height 12px
          margin-bottom 8px
        .extra 
          .count 
            margin-right 12px
        .price 
          font-weight 700
          line-height 24px
          .now 
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old 
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute;
          bottom: 12px;
          right: 0;
</style>