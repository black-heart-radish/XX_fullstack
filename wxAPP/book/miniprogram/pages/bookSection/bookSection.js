// pages/bookSection/bookSection.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailData: [],
    lastData: [],
    pageData: [],
    pageArray: [],
    page: 0, // 当前页
    pre: '',
    next: '',
    preAble: false,
    nextAble: false
  },

  // 上一页
  prePage() {
    if (this.data.preAble) return
    this.setData({
      page: this.data.page - 1
    })
    this.getSection(this.data.pre);
  },

  // 下一页
  nextPage() {
    if (this.data.nextAble) return
    this.setData({
      page: this.data.page + 1
    })
    this.getSection(this.data.next);
  },

  // picker翻页
  changePage(e) {
    const value = parseInt(e.detail.value);
    // let {value} = e.detail;
    // value = parseInt(value);
    if (value == this.data.page) return;
    this.setData({
      page: value
    });
    this.getSection(this.data.pageArray[value].name)
  },

  // 去看小说
  navtoUrl(e) {
    // console.log(e);
    let {url} = e.currentTarget.dataset;
    // console.log(url);
    // 已经存在书架的书，记录阅读状态
    if (url) {
      db.collection('book').where({
        userId: app.globalData.openid,
        bookName: this.data.bookDetailData.name
      }).get().then(res => {
        // console.log(res);
        let data = res.data || [];
        if (data.length > 0) {
          if (data[0].bookUrl != url) {
            const id = data[0]._id || '';
            db.collection('book').doc(id).update({
              data: {
                bookUrl: url
              }
            }).then(res => {
              console.log(res);
            })
          }
        }

      //   let data = res.data || []
      //   if (data.length > 0) {
      //     if (data[0].bookUrl != url) {
      //       const id = data[0]._id || ''
      //       db.collection('book').doc(id).update({
      //         data: {
      //           bookUrl: url
      //         }
      //       }).then(res => {
      //         console.log(res);
      //       })
      //     }
      //   }
      })
    }
    wx.navigateTo({
      url: `../bookContent/bookContent?url=${url}&name=${this.data.bookDetailData.name}&imgUrl${this.data.bookDetailData.imgurl}`
    });
  },

  // 加入书架
  joinBook(e) {
    let {
      url
    } = e.currentTarget.dataset;
    db.collection('book').where({
      userId: app.globalData.openid,
      bookName: this.data.bookDetailData.name
    }).get().then(res => {
      // console.log(res);
      const data = res.data[0] || [];
      if (data.length == 0) { // 没有加入过书架
        db.collection('book').add({
          data: {
            userId: app.globalData.openid,
            bookName: this.data.bookDetailData.name,
            bookUrl: url,
            imgurl: this.data.bookDetailData.imgurl
          }
        }).then(res => {
          // console.log(res);
          wx.showToast({
            title: '加入成功',
            icon: 'success'
          }, 3000);
        })
      } else {
        wx.showToast({
          title: '本书已在书架，请到书架阅读',
          icon: 'none'
        });
      }
    })
  },

  // 书籍信息爬数据
  getSection(url) {
    wx.showLoading({
      title: '正在加载'
    });
    wx.cloud.callFunction({
      name: 'bookSection',
      data: {
        url: url
      }
    }).then(res => {
      // console.log(res);
      wx.hideLoading();
      const {
        result
      } = res;
      this.setData({
        bookDetailData: result.bookDetailData,
        lastData: result.lastData,
        pageData: result.pageData,
        pageArray: result.pageArray,
        pre: result.pre,
        next: result.next,
        preAble: result.pre === '' ? true : false,
        nextAble: result.next === '' ? true : false
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const {
      url
    } = options;
    this.getSection(url);
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})