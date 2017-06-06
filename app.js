//app.js
//App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等
//App() 必须在 app.js 中注册，且不能注册多个
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据 怎么开始就是获取，在哪里设置了，还是自动创建logs字段
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now()) //获取当前日期
    wx.setStorageSync('logs', logs)
  },
  //获取用户信息，其中就包含了登录wx.login，登录代码中又包含了wx.getUserInfo
  getUserInfo:function(cb){
    var that = this  //使用 this 就可以拿到 app 实例。
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口 内部只有一个方法 登录那就是为了获取到登录用户的信息
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              // var userInfo = res.userInfo  //将userInfo数组赋值到局部变量就简化一层
              // var nickName = userInfo.nickName
              // var avatarUrl = userInfo.avatarUrl
              // var gender = userInfo.gender //性别 0：未知、1：男、2：女
              // var province = userInfo.province
              // var city = userInfo.city
              // var country = userInfo.country

              that.globalData.userInfo = res.userInfo
              //获取的数据向调用方index的页面中共页面调用
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //自定义的一些全局变量 如菜单名称 暂时无法在各个页面中调用 而只能在同名的js定义的才可以调用
  //虽然暂时不能在app级别存放统一的字符串，但至少可以在同级的文件中调用，逐步调用自由。
  //对于一个页面中的字符串的话，js中提供的全局变量就是非常集中的，各个菜单名称字符串只能分散
  globalData:{
    userInfo:null,
    menu1:"案例体验",
    menu2: "合同样本",
    menu3: "项目进度",
    menu4: "项目意见",
    menu5: "费用申报",
    menu6: "资金收入",
    menu7: "任务分配",
    menu8: "公基金",
    menucaptioncaseExperience: "互微OA系统--案例体验",
    menucaptioncontractSample: "互微OA系统--合同样本",
    menucaptionprojectProgress: "互微OA系统--项目进度",
    menucaptionprojectIdeas: "互微OA系统--项目意见",
    menucaptioncostToDeclare: "互微OA系统--费用申报",
    menucaptionmoneyIncome: "互微OA系统--资金收入",
    menucaptiontaskAllocation: "互微OA系统--任务分配",
    menucaptionpublicFund: "互微OA系统--公基金"          
  }
})
