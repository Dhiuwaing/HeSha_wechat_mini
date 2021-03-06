// pages/multiSearch/multiSearch.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */


  onLoad: function (options) {
    let lastPage = getCurrentPages().slice(-2, -1)[0]
    let lastPageData = lastPage.data
      this.setData ({
      recipes: lastPageData.recipes,
      keywords: lastPageData.keywords
    })
  },

  goToRecipe: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/recipe/recipe?id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})