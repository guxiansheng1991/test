// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 待办事项
    list: [],
    showDeleteBtn: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // add method
  addMethod(value) {
    const list = this.data.list;
    list.push({
      value: value,
      finished: false,
      edit: false,
      id: Math.random()*10000
    });
    this.setData({
      list: list
    });
  },
  // edit method
  editMethod(item) {
    for (let i = 0; i < this.data.list.length; i++) {
      const subItem = this.data.list[i];
      if (subItem.id === item.id) {
        const k = `list[${i}]`;
        this.setData({
          [k]: item
        });
      }
    }
  },
  // delete method
  deleteMethod(item) {
    const ls = [];
    for (let i = 0; i < this.data.list.length; i++) {
      const subItem = this.data.list[i];
      if (subItem.id !== item.id) {
        ls.push(subItem);
      }
    }
    this.setData({
      list: ls
    });
  },

  // 新增待办事项
  myAdd(e) {
    this.addMethod(e.detail);
  },
  // 修改待办事项
  myEdit(e) {
    const item = e.detail;
    this.editMethod(item);
    // 检测删除按钮显示
    let arr = this.data.list.filter(ele => {
      return ele.finished;
    });
    if (arr.length > 0) {
      this.setData({
        showDeleteBtn: true
      });
    } else {
      this.setData({
        showDeleteBtn: false
      });
    }
  },
  // 选择全部
  myCheckAll(e) {
    const checkAll = e.detail;
    const ls = this.data.list;
    for (let i = 0; i < ls.length; i++) {
      ls[i].finished = checkAll;
    }
    this.setData({
      list: ls,
      showDeleteBtn: checkAll
    });
  },
  // 删除
  myDelete(e) {
    const ls = [];
    for (let i = 0; i < this.data.list.length; i++) {
      const subItem = this.data.list[i];
      if (!subItem.finished) {
        ls.push(subItem);
      }
    }
    this.setData({
      list: ls
    });
  }
})