// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrList: []
  },

  updateArrList() {
    let arr = this.data.arrList
    // 把数组解构
    arr.push(...this.createData())
    // 修改数据必须要有setData
    this.setData({
      arrList: arr
    })
  },

  createData() {
    let length = this.data.arrList.length
    if (length >= 30) return []
    // Array.from把类数组变成数组
    // array.from({length: 5}, (v, i) => i); v是value这里为undefined i是下标 =>箭头函数
    return Array.from({length: 3}, (v, i) => `数据${1 + i + length}`)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到底了");
    this.updateArrList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})