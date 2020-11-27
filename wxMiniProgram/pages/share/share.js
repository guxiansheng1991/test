// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str: 'shen',
    arr: [
      {
        username: '张三',
        age: 1000
      },
      {
        username: '李四',
        age: 2000
      }
    ]
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 接受子组件传出的数据
  onMyEvent(e) {
    console.log('子组件传出数据', e.detail);
  },
  // 直接调用子组件实例内容,非常不建议
  parentCallChild() {
    const child = this.selectComponent('.communication');
    console.log(child);
    child.logData();
  }
})