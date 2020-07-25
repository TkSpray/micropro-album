// pages/home/album/imgprocess/imgprocess.js
const extCi = require('@cloudbase/extension-ci-wxmp')
const db = wx.cloud.database()
const _ = db.command
Page({
  /**
   * 页面的初始数据
   */
  data: {
    processSrc: '',
    src: '',
    urls: [],
    id: 0,
    _id: 0,
    text: '',
    fileID: '',
  },
  previewImage: function (e) {
    if (e.currentTarget.dataset.src) {
      wx.previewImage({
        current: e.currentTarget.dataset.src, // 当前显示图片的http链接
        urls: this.data.urls, // 需要预览的图片http链接列表
      })
    }
  },
  textInput: function (e) {
    this.setData({
      text: e.detail.value,
    })
  },
  imgprocess() {
    let src = this.data.src
    let cloudpath = src.substr(src.indexOf('/', 15))
    let fileid =
      `/cloudbase/${Date.now()}-${Math.floor(Math.random(0, 1) * 1000)}-pro` +
      src.match(/\.[^.]+?$/)[0]
    this.setData({
      fileID: 'cloud://xly-smmu1.786c-xly-smmu1-1302636627' + fileid,
    })
    console.log(this.data.processSrc)
    extCi
      .invoke({
        action: 'ImageProcess',
        cloudPath: cloudpath, // 会直接处理这张图片
        operations: {
          rules: [
            {
              fileid: fileid,
              rule:
                'watermark/2/text/6IW-6K6v5LqRwrfkuIfosaHkvJjlm74/fill/IzNEM0QzRA/fontsize/20/dissolve/50/gravity/northeast/dx/20/dy/20/batch/1/degree/45', // 处理样式参数，与下载时处理图像在url拼接的参数一致
            },
          ],
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  confirm() {
    var that = this
    this.imgprocess()
    db.collection('album')
      .doc(that.data._id)
      .update({
        data: {
          ['albums.' + that.data.id + '.photos']: _.push({
            cloudPath: that.data.fileID,
          }),
        },
      })
      .then((result) => {
        console.log('写入成功', result)
      })
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
    let urls = [options.src]
    this.setData({
      src: options.src,
      id: options.id,
      urls,
    })
    this.checkUser()
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
