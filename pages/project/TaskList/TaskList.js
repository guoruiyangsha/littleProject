// pages/project/TaskList/TaskList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({ title: options.uid })
    that.data.test = options.uid //向当前页面data字段赋值的正确姿势
    wx.request({
      url: 'http://127.0.0.1/tasklist.php',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //将整个返回值展示到页面上
        that.setData({ zhihu: res.data.jsonObj })
        console.log('任务分配列表数组值',res)
        //将登录的uid保存，当有记事内容要保存时，一并提交到服务器
        // that.setData({ uid: res.data.jsonObj[0]['name'] })
        // var permission = res.data.jsonObj[0]['permission']

      }
    }) 
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