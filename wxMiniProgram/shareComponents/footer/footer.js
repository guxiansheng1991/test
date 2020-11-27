// shareComponents/footer/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showDeleteBtn: {
      type: Boolean,
      value: false,
      observer: function(val) {
        this.setData({
          showBtn: val
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    checkAll: false,
    showBtn: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 全选
    checkAllMethod(e) {
      this.setData({
        checkAll: !this.data.checkAll
      });
      this.triggerEvent('checkall', this.data.checkAll);
    },
    // 删除
    delete() {
      this.triggerEvent('delete');
    }
  }
})
