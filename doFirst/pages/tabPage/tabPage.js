// pages/tabPage/tabPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { id: 0, name: "首页", isActive: true },
      { id: 1, name: "原创", isActive: false },
      { id: 2, name: "分类", isActive: false },
      { id: 3, name: "关于", isActive: false },
    ]
  },
  // 自定义事件，用来接受祖居件传递数据
  handleItemChange(e) {
    const { index } = e.detail;
    const { tabs } = this.data;
    tabs.forEach((v, i) => v.isActive = i === index);
    this.setData({
      tabs
    })
  }
})