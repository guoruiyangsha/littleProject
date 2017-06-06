// pages/project/taskAllocation/taskAllocation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['王贞', '彭东', '郝俊飞', '郭瑞','张晓婷'],
    arraytype: ['小程序', '公众平台', '域名备案', 'H5场景', '手机APP'],

    projectType:'',
    planfinishedDate: '',
    head: '',

  },
  bindPickerhead: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      head: e.detail.value
      
    })
    this.data.head = this.data.array[e.detail.value]

  },
  bindPickerprojectType: function (e) {

    this.setData({
      projectType: e.detail.value
    })
    this.data.projectType = this.data.arraytype[e.detail.value]
  },
  bindPickerplanfinishedDate: function (e) {

    this.setData({
      planfinishedDate: e.detail.value
    })
    this.data.planfinishedDate = e.detail.value
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //从服务器请求负责人和程序类型，不然这里是属于写死的状态
  },
  //事件处理函数 查看任务分配表
  projectList: function () {
    wx.navigateTo({
      url: '../../project/TaskList/TaskList'
    })
  },
  // 表单提交按钮事件
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value.pwd)
    var that = this
    var username = ''
    wx.request({
      url: 'http://127.0.0.1/taskAllocation.php?projectName=' + e.detail.value.projectName + '&projectType=' + that.data.projectType + '&head=' + that.data.head,
      data: {totalAmount: e.detail.value.totalAmount, incomeAmount: e.detail.value.incomeAmount, remainingAmount: e.detail.value.remainingAmount, planfinishedDate: that.data.planfinishedDate},
      
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)  //检测返回数据
        var temp = res.data
        if (temp == 1) {
          console.log(res.data)
          wx.showToast({

            title: '任务分配执行成功',
            icon: 'success',
            duration: 1000
          })
        }
        else {
          console.log(res.data)
          wx.showToast({
            title: '任务分配执行失败',
            icon: 'fail',
            duration: 2000
          })
        }
      }
    })
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