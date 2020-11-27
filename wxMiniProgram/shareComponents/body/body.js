// shareComponents/body/body.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
      observer: function(newList, oldList) {
        console.log(newList);
        this.setData({
          list: newList,
          myList: newList
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    myList: []
  },

  lifetimes: {
    attached() {
      this.setData({
        myList: this.data.list
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示修改input
    showItem(e) {
      const item = e.target.dataset.item;
      const index = e.target.dataset.index;
      if (item.finished) {
        return;
      }
      const k = `myList[${index}].edit`;
      this.setData({
        [k]: !item.edit
      });
    },
    // 修改
    editItem(e) {
      const item = e.target.dataset.item;
      this.triggerEvent('edit', {
        value: e.detail.value,
        finished: false,
        edit: false,
        id: item.id
      });
    },
    // 完成某一项待办事项(或者反向操作)
    checkedMethod(e) {
      const item = e.target.dataset.item;
      item.finished = !item.finished;
      this.triggerEvent('edit', item);
    }
  }
})
