// shareComponents/myObservers/myObservers.js
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
    name: '申玉超',
    list: [
      {
        k1: 111,
        k2: 'hhhhhhhh'
      },
      {
        k1: 111,
        k2: 'hhhhhhhh'
      },
      {
        k1: 111,
        k2: 'hhhhhhhh'
      },
      {
        k1: 0,
        k2: 'aaaaaaaaaaaaaaaa'
      }
    ],
    obj: {
      k1: '啥啥啥',
      k2: '么么么么么'
    }
  },

  observers: {
    'name': function(val) {
      console.log('监控到内部变化数据:', val);
    },
    'list[3]': function(val) {
      console.log('监控到内部变化数据:', val);
    },
    'obj.k1': function(val) {
      console.log('监控到内部变化数据:', val);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 修改name
    updateName() {
      this.setData({
        name: '哈哈哈哈哈哈哈哈哈哈或哈哈哈或或'
      });
    },
    // 修改list
    updateList() {
      this.data.list[3].k1 = 20000;
      this.setData({
        'list[3]': {
          k1: 20000,
          k2: '67890-'
        }
      });
    },
    updateObj() {
      this.setData({
        'obj.k1': '防守打法地方撒旦法'
      });
    }
  }
})
