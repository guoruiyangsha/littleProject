// pages/project/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // accuracy:0,
    // altitude:0,
    // horizontalAccuracy:0,
  },
  // 获取位置信息事件
  getlocation: function() {
    var that=this  
    //获取当前的位置信息
    wx.getLocation({
      success: function (res) {
        that.setData({
          
          accuracy:res.accuracy,
          altitude:res.altitude,
          horizontalAccuracy:res.horizontalAccuracy,
          latitude:res.latitude,
          longitude:res.longitude,
          speed:res.speed,
          verticalAccuracy:res.verticalAccuracy
          
        })
        //根据获取到的位置信息（经纬度）打开地图
        wx.openLocation({
          latitude: 37.4729,
          longitude: 112.3330,
          scale: 5
        })
      },
    })   
  },
  //选择地图
  chooselocation: function () {
    var that = this
    wx.chooseLocation({
      success: function(res) {
        that.setData({

          name:res.name,
          address: res.address,
          latitude: res.latitude,
          longitude: res.longitude,

        })
        console.log(res)
      },
    })
  },
  //设置缓存指定键值对
  setStorage: function () {
    var that = this
    wx.setStorage({
      key: 'username',
      data: 'guorui',
    })

  },
  //获取缓存中指定字段值
  getStorage: function () {
    var that = this
    wx.getStorage({
    key: 'username',
    success: function (res) { console.log(res)},
})

  },
  //读取缓存全部信息
  getStorageInfo: function () {
    var that = this
    wx.getStorageInfo({
      success: function(res) {
        console.log(res)
      },
    })

  },
  chooseAddress:function(){
    wx.chooseAddress({
      //调用成功
      success: function (res) { console.log(res) },
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