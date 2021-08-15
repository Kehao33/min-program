// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: "initValue"
    },
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 
     * @param {事件对象} e 
     * 1. 绑定事件对象
     * 2. 获取被点击的索引
     * 3. 获取原数组
     * 4. 对象循环
     * 给每个属性进行循环，选中属性改为false
     * 给当前索引项改为true，及激活状态就好
     * 
     * 
     */
    handleItemTap(e) {
      // 获取自定义属性获取的值
      const { index } = e.currentTarget.dataset;

      // 触发父组件的自定义事件， 同时传递数据给父组件的函数
      this.triggerEvent("itemChange",{index});
      // 获取data中的数组
      // const { tabs } = this.data;
      // // 循环数组改变值
      // // array.forEach(value,index)遍历数组的时候如果修改了value,那么也会导致原数组被修改
      // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
      // this.setData({ tabs })
    }
  }
})
