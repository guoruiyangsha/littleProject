// pages/project/login/login.js
Page({
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value.pwd)
    var that = this
    var username=''
    wx.request({
      url: 'http://127.0.0.1/login.php?uid=' + e.detail.value.uid + '&pwd=' + e.detail.value.pwd,
      data: { page: '小程序参数1', locationCityId: '小程序参数2' },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var temp=res.data
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
   
    // wx.showToast({
    //   // title: '登录成功',
    //   title: item.username,
    //   icon: 'success',
    //   duration: 2000
    // })
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    //无法更新本页面 开始携带参数发送到个人中心页面进行展示数据
    // wx.navigateTo({
    //   url: '../../project/personalCenter/personalCenter?uid=' + e.detail.value.uid
    // })  
  },

  /**
   * 页面的初始数据
   */
  data: {
  zhihu:'',
  username:''
  },
  forgotpwd: function () {

  },
  regedit: function () {
    wx.navigateTo({
      url: '../../project/regedit/regedit'
    })
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
  
  }
})