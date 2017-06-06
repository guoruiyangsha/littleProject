// pages/project/login/login.js
Page({
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value.pwd)
    var that = this
    var username = ''
    wx.request({
      url: 'http://127.0.0.1/login.php?uid=' + e.detail.value.uid + '&pwd=' + e.detail.value.pwd,
      data: { page: '小程序参数1', locationCityId: '小程序参数2' },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var temp = res.data
        if (temp == 1) {
          console.log(res.data)
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 1000
          })
          wx.navigateTo({
            url: '../../project/personalCenter/personalCenter?uid=' + e.detail.value.uid
          })
        }
        else {
          console.log(res.data)
          wx.showToast({
            title: '用户名/密码错误，请检查输入或注册账号',
            icon: 'fail',
            duration: 2000
          })
        }

        // username = res.data.jsonObj[0]['username']
        // console.log(username)
        //ajax调用成功返回值为res，再往下就是res.data 再次下为res.data.jsonObj
        // that.setData({
        //   //将返回数值进一步下降到res.data.jsonObj，将数组赋值为zhihu数组变量 用于页面
        //   zhihu: res.data.jsonObj,
        // })
      }
    })

  },

  /**
   * 页面的初始数据
   */
  data: {
 
  },
  // 验证码获取
  Verification: function () {
    var that = this
    var username = ''
    wx.request({
      url: 'http://127.0.0.1/login.php?uid=' + e.detail.value.uid + '&pwd=' + e.detail.value.pwd,
      data: { page: '小程序参数1', locationCityId: '小程序参数2' },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var temp = res.data
        if (temp == 1) {
          console.log(res.data)
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 1000
          })
          wx.navigateTo({
            url: '../../project/personalCenter/personalCenter?uid=' + e.detail.value.uid
          })
        }
        else {
          console.log(res.data)
          wx.showToast({
            title: '用户名/密码错误，请检查输入或注册账号',
            icon: 'fail',
            duration: 2000
          })
        }

        // username = res.data.jsonObj[0]['username']
        // console.log(username)
        //ajax调用成功返回值为res，再往下就是res.data 再次下为res.data.jsonObj
        // that.setData({
        //   //将返回数值进一步下降到res.data.jsonObj，将数组赋值为zhihu数组变量 用于页面
        //   zhihu: res.data.jsonObj,
        // })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})