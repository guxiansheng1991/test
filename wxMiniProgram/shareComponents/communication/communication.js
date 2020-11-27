// shareComponents/communication/communication.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    str: {
      type: String,
      value: ''
    },
    arr: {
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
    outEvent() {
      this.triggerEvent('myevent', {username: '王无', age: 9000});
    },
    // 供外部调用使用,但是一般不建议
    logData() {
      console.log('外部调用');
    }
  }
})
