// pages/base/base.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg:'hello world',
    img:'/images/pig.jpg',
    arr:['a','b','c','d'],

    list:[
      { year:'2004年-2010年:',sch:'北京市京通小学学习'},
      { year:'2010年-2013年:',sch:'北京市陈经纶中学初中部学习'},
      { year:'2013年-2016年:',sch:'北京市陈经纶中学高中部学习'},
      { year:'2016年-2020年:',sch:'北京语言大学高级翻译学院学习'},
    ],
    islogin:true,
  count:0
  },

  onTapHandler:function(){
    //this.data.count++;
   this.setData({count:this.data.count+1});
  },

  onTapBoxHandler: function () {console.log('box点击');},
  onTapChildHandler: function () { console.log('child点击');},

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