// pages/project/personalCenter/personalCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:'',
  uid:'dd',
  username:'aaa',
  test:'test' //以下的任何方法都会改变此值 属于最初的页面初始值
  },

  /**
   * 生命周期函数--监听页面加载 页面初始化 options为页面跳转所带来的参数
   */
onLoad:function(options){
  var that = this 
  that.setData({ title: options.uid }) 
  that.data.test = options.uid //向当前页面data字段赋值的正确姿势
  wx.request({
    url: 'http://127.0.0.1/personalCenter.php?uid=' + options.uid,
    data: { page: '小程序参数1', locationCityId: '小程序参数2' },
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    success:function(res){
      //将整个返回值展示到页面上
      that.setData({zhihu:res.data.jsonObj}) 
      //将登录的uid保存，当有记事内容要保存时，一并提交到服务器that.data.params.username
      that.setData({uid: res.data.jsonObj[0]['name']})
      var permission = res.data.jsonObj[0]['permission']
      //判断权限等级，显示不同权限的按钮来进行操作
      if (permission>2){
        that.setData({ 
          disabled1: false
        }) 
        that.setData({
          disabled2: false
        }) 
      }
      else{
        that.setData({
          disabled1: true
        })
        that.setData({
          disabled2: false
        }) 
        
      }
    }
  })
},
//form提交 上传记事本内容并附带用户名，以便用户名记事内容得以保存
noteSubmit: function (e) {
  var that = this 
  var test1 = that.data.test //这才是取当前页面data的正确姿势****

  console.log(e.detail.value.noteContent + test1)
  var url= 'http://127.0.0.1/note.php?uid=' + test1 + '&noteContent=' + e.detail.value.noteContent
  console.log(url)

  wx.request({
    url: 'http://127.0.0.1/note.php?uid=' + test1 + '&noteContent=' + e.detail.value.noteContent,
    data: { page: '小程序参数1', locationCityId: '小程序参数2' },
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      var temp = res.data
      if (temp == 1) {
        console.log(res.data)
        wx.showToast({

          title: '记事本内容保存成功',
          icon: 'success',
          duration: 1000
        })
      }
      else {
        console.log(res.data)
        wx.showToast({
          title: '记事本内容保存失败',
          icon: 'fail',
          duration: 2000
        })
      }
    }
  })
},
//事件处理函数 项目进度
projectProgress: function () {
  wx.navigateTo({
    url: '../../project/projectProgress/projectProgress'
  })
},
//事件处理函数 项目意见
projectIdeas: function () {
  wx.navigateTo({
    url: '../../project/projectIdeas/projectIdeas'
  })
},
//事件处理函数 费用申报
costToDeclare: function () {
  wx.navigateTo({
    url: '../../project/costToDeclare/costToDeclare'
  })
},
//事件处理函数 资金收入
moneyIncome: function () {
  wx.navigateTo({
    url: '../../project/moneyIncome/moneyIncome'
  })
},
//事件处理函数 任务分配
taskAllocation: function () {
  wx.navigateTo({
    url: '../../project/taskAllocation/taskAllocation'
  })
},
//事件处理函数 公基金
publicFund: function () {
  wx.navigateTo({
    url: '../../project/personalCenter/personalCenter?id=444'
  })
},
//事件处理函数 支付 **试验
payment: function () {
  wx.requestPayment({
    timeStamp: '',
    nonceStr: '',
    package: '',
    signType: '',
    paySign: '',
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