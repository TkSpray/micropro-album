let app = getApp()

const db = wx.cloud.database()
const _ = db.command
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    album: {},
    urls: [],
    startTime: 0,
    endTime: 0,
  },
  previewImage: function (e) {
    if (this.data.endTime - this.data.startTime < 350) {
      wx.previewImage({
        current: e.currentTarget.dataset.src, // 当前显示图片的http链接
        urls: this.data.urls, // 需要预览的图片http链接列表
      })
    }
  },
  imgProcess(e) {
    wx.navigateTo({
      url:
        '/pages/home/album/imgprocess/imgprocess?id=' +
        this.data.id +
        '&src=' +
        e.currentTarget.dataset.src,
    })
  },
  tapStart(e) {
    this.setData({
      startTime: e.timeStamp,
    })
  },
  tapEnd(e) {
    this.setData({
      endTime: e.timeStamp,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async getUserData() {
    const userData = await db.collection('album').get()
    let id = this.data.id
    for (let temp of userData.data[0].albums) {
      if (id == temp.id) {
        let urls = []
        for (let photo of temp.photos) {
          urls.push(photo.cloudPath)
        }
        this.setData({
          album: temp,
          urls,
        })
        break
      }
    }
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
    })

    wx.setNavigationBarTitle({
      title: options.name,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getUserData()
  },

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
