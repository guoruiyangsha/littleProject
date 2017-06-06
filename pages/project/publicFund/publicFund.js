// pages/project/publicFund/publicFund.js
var common = require('../../../common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   data1:"互微OA系统--公基金",
   array:[1,2,3,4],
   view: 'MINA',
   staffA: { firstName: 'Hulk', lastName: 'Hu' },
   staffB: { firstName: 'Shang', lastName: 'You' },
   staffC: { firstName: 'Gideon', lastName: 'Lin' }
  },
    /**
   * 自定义函数
   */
  helloMINA: function () {
    common.sayHello('MINA')
  },
  showMessage:function(){
    wx.showModal({
    title: '提示',
    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
  })
  },
  xhr: function () {
  var that = this
  wx.request({
    url: 'http://127.0.0.1/chuli1.php?uid=wangzhen', 
    data: { page: '小程序参数1', locationCityId: '小程序参数2' },
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      console.log(res.data)
    }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://127.0.0.1/chuli1.php?uid=xiaoting',
      data: { page: '小程序参数1', locationCityId: '小程序参数2' },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          zhihu: res.data.jsonObj,
        })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})