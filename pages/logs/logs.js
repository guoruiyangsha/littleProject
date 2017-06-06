//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123'
    }
  }
})
