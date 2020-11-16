// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e) {
      // console.log(e);
      const {index} = e.currentTarget.dataset;
      this.triggerEvent('itemChange', {index});
      // console.log(index);
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
      // this.setData({
      //   tabs
      // })
    }
  }
})
