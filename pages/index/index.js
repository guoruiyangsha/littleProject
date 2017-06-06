//index.js
//获取应用实例
var app = getApp()
//Page() 函数用来注册一个页面。其指定页面的初始数据、生命周期函数、事件处理函数等
Page({
  data: { //页面的初始数据
    motto: 'Hello World',
    userInfo: {}, 
    indicatorDots: true,
      
    autoplay: true,
    interval: 4000,
    duration: 300,
    circular: true,
    goodsPicsInfo: ["../../images/1.png", "../../images/2.png"]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //事件处理函数 地图展示
  map: function () {
    wx.navigateTo({
      url: '../project/map/map'
    })
  },
  //事件处理函数 案例体验
  caseExperience: function () {
    wx.navigateTo({
      url: '../project/caseExperience/caseExperience' 
    })
  },
    //事件处理函数 合同样本
  contractSample: function () {
    wx.navigateTo({
      url: "../project/contractSample/contractSample"
    })
  },
    //事件处理函数 项目进度
  projectProgress: function () {
    wx.navigateTo({
      url: '../project/projectProgress/projectProgress'
    })
  },
  //事件处理函数 项目意见
  projectIdeas: function () {
    wx.navigateTo({
      url: '../project/projectIdeas/projectIdeas'
    })
  },
  //事件处理函数 费用申报
  costToDeclare: function () {
    wx.navigateTo({
      url: '../project/personalCenter/personalCenter?id=444'
    })
  },
  //事件处理函数 资金收入
  moneyIncome: function () {
    wx.navigateTo({
      url: '../project/api/api'
    })
  },
  //事件处理函数 任务分配
  taskAllocation: function () {
    wx.navigateTo({
      url: '../project/taskAllocation/taskAllocation'
    })
  },
  //事件处理函数 公基金
  publicFund: function () {
    wx.navigateTo({
      url: '../project/publicFund/publicFund'
    })
  },
  // 生命周期函数--监听页面加载
  onLoad: function () {
    wx.hideShareMenu()
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据 接收处为形参为cb，因此方法中就会判断typeof类型是函数
    app.getUserInfo(function(userInfo){
      //更新数据 setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
      that.setData({
        userInfo: userInfo,  //初始值为userInfo:null 因此这里更新数据
        //采用二种方法对首页菜单标题进行设置 一个是直接写，这是将变量集中在app出统一调用
        menu1: getApp().globalData.menu1,
        menu2: getApp().globalData.menu2,
        menu3: getApp().globalData.menu3,
        menu4: getApp().globalData.menu4,
      })
    })

  },
  // 在 Page 中定义 onShareAppMessage 函数，设置该页面的转发信息
  onShareAppMessage: function () {

  }
})
