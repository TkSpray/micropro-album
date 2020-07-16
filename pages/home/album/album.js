let app = getApp()
let albums = app.albumData.albums
Page({
  /**
   * 页面的初始数据
   */
  data: {
    album: {},
  },
  chooseImg: function () {
    let imgurl = this.data.imgurl
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        imgurl.push(...res.tempFilePaths)
        this.setData({
          imgurl,
          hasImg: true,
        })
      },
    })
  },
  previewImage: function (e) {
    console.log(e.currentTarget.dataset.src)
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls: this.data.album.imgurl, // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let id = options.id
    for (let temp of albums) {
      console.log(temp)
      if (temp.id == id) {
        this.setData({
          album: temp,
        })
        break
      }
    }
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
