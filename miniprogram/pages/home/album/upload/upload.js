// pages/home/album/upload/upload.js
let app = getApp()
let albums = app.albumData.albums
const db = wx.cloud.database()
const _ = db.command
Page({
  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    album: {},
    name: '',
    id: 0,
    _id: 0,
  },

  async chooseImage(e) {
    var that = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths),
        })
        // for (let temp of albums) {
        //   if (temp.id == id) {
        //     temp.imgurl.push(...res.tempFilePaths)
        //     console.log(app.albumData.albums)
        //     break
        //   }
        // }
        for (let temp of that.data.files) {
          let filePath = temp
          let cloudPath =
            `cloudbase/${Date.now()}-${Math.floor(Math.random(0, 1) * 1000)}` +
            filePath.match(/\.[^.]+?$/)[0]
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: (res) => {
              console.log('上传成功返回的res' + JSON.stringify(res))
              db.collection('album')
                .doc(that.data._id)
                .update({
                  data: {
                    ['albums.' + that.data.id + '.photos']: _.push({
                      cloudPath: res.fileID,
                    }),
                  },
                })
                .then((result) => {
                  console.log('写入成功', result)
                })
            },
          })
        }
      },
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files, // 需要预览的图片http链接列表
    })
  },
  redirectTo() {
    wx.redirectTo({
      url: '/pages/home/home',
    })
  },
  async checkUser() {
    const userData = await db.collection('album').get()
    let _id = userData.data[0]._id

    this.setData({
      _id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name,
      id: options.id,
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
    this.checkUser()
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
