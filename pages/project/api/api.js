// pages/project/personalCenter/personalCenter.js
Page({
  // 下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    // 一般都是使用ajax从服务器请求数据的操作，因此最主要的还是事件的触发能够捕获
    // wx.request({
    //   url: 'https://URL',
    //   data: {},
    //   method: 'GET',

    //   success: function (res) {
    //     // success
    //   },
    //   fail: function () {
    //     // fail
    //   },
    //   complete: function () {
    //     // complete
    //     wx.hideNavigationBarLoading() //完成停止加载
    //     wx.stopPullDownRefresh() //停止下拉刷新
    //   }
    // })              

  },
  // 上拉加载
  onReachBottom: function () {
    
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  //事件处理函数 微信扫码
  wxscanCode: function () {
    wx.scanCode({
      onlyFromCamera: true,
      // 这里是因为要调用摄像头硬件而语法不同吗，普通写法为success:function(res)()
      success: (res) => {
        // console.log(res)
        wx.showModal({
          title: res.result,
          content: res.path,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  //事件处理函数 拨打电话
  wxmakePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '10010' //仅为示例，并非真实的电话号码
    })
  },
  //事件处理函数 获取系统信息
  wxgetSystemInfo: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log("手机型号：",res.model)
        console.log("设备像素比：",res.pixelRatio)
        console.log("屏幕宽度：",res.windowWidth)
        console.log("屏幕高度：",res.windowHeight)
        console.log("微信设置的语言：",res.language)
        console.log("微信版本号：",res.version)
        console.log("操作系统版本：", res.system)
        console.log("客户端平台：",res.platform)
        console.log("客户端基础库版本：", res.SDKVersion)
      }
    })
  },
  //事件处理函数 获取网络状态
  wxonNetworkStatusChange: function () {
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        console.log("网络类型：", networkType)
      }
    })
    // 监听网络状态变化 这里是属于周期性检测的，如果状态发生变化才触发
    // wx.onNetworkStatusChange(function (res) {
    //   console.log(res.isConnected)
    //   console.log(res.networkType)
    // })
  },
  //事件处理函数 显示加载中
  wxshowLoading: function () {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  //事件处理函数 显示模态窗口
  wxshowModal: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //事件处理函数 显示操作菜单
  wxshowActionSheet: function () {
    wx.showActionSheet({
      itemList: ['拍照', '相册', '文件'],
      success: function (res) {
        console.log(res.tapIndex)
        // 检测到按下某个菜单后执行相应的操作
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  //事件处理函数 动态设置当前页面的标题
  wxsetNavigationBarTitle: function () {
    wx.setNavigationBarTitle({
      title: 'wxsetNavigationBarTitle设置页面标题'
    })
  },
  //事件处理函数 下拉刷新
  onPullDownRefresh: function () {

    
  },
  //事件处理函数 拨打电话
  wxmakePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '10010' //仅为示例，并非真实的电话号码
    })
  },
  //事件处理函数 微信支付
  payment: function () {
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  },
})