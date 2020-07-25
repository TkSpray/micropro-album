// pages/home/home.js
let app = getApp()
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    albums: [],
    userData: {},
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
  previewImg: function () {
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.imgurl,
    })
  },
  async checkUser() {
    //获取clouddisk是否有当前用户的数据，注意这里默认带了一个where({_openid:"当前用户的openid"})的条件
    const userData = await db.collection('album').get()
    console.log('当前用户的数据对象', userData)

    //如果当前用户的数据data数组的长度为0，说明数据库里没有当前用户的数据
    if (userData.data.length === 0) {
      //没有当前用户的数据，那就新建一个数据框架，其中_id和_openid会自动生成
      return await db
        .collection('album')
        .add({
          data: {
            albums: [],
          },
        })
        .then((res) => {
          app.userData.userdata = userData
        })
    } else {
      this.setData({
        userData,
      })
    }
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
