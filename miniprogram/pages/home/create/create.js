// pages/home/create/create.js
let app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    id: 0,
    userData: {},
  },
  confirm() {
    this.createAlbum()

    wx.redirectTo({
      url:
        '/pages/home/album/upload/upload?id=' +
        this.data.id +
        '&name=' +
        this.data.name,
    })
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value,
    })
  },
  async createAlbum() {
    const userData = await db.collection('album').get()
    let id = userData.data[0].albums.length
    const _id = userData.data[0]._id
    this.setData({
      userData,
      id,
    })
    let name = this.data.name

    return await db
      .collection('album')
      .doc(_id)
      .update({
        data: {
          albums: _.push([{ id: id, name: name, photos: [] }]),
        },
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
