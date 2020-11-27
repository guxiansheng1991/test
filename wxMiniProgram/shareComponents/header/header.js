// shareComponents/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    text: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add() {
      this.triggerEvent('add', this.data.text);
      this.setData({
        text: ''
      });
    }
  }
})
