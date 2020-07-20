// pages/home/create/create.js
let app = getApp()
let albums = app.albumData.albums
Page({
  /**
   * 页面的初始数据
   */
  data: {
    albums: albums,
    name: '',
    id: 0,
  },
  confirm() {
    let id = albums.length
    let name = this.data.name
    let album = {
      id: id,
      name: name,
      imgurl: [],
    }

    app.albumData.albums.push(album)

    wx.redirectTo({
      url: '/pages/home/album/upload/upload?id=' + id + '&name=' + name,
    })
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
