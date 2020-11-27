# 微信小程序组件
> share.md同级文档中,pages和shareComponents内的文件不可执行,仅仅是代码demo
- 一. 原生组件
- 二. 自定义组件
    - 1. 基本使用
    - 2. 组件通信
    - 3. 数据监听器
    - 4. 组件代码抽离
- 三. 实例todolist

## 一. 原生组件
链接: https://developers.weixin.qq.com/miniprogram/dev/component/
可自行查看文档
## 二. 自定义组件
> 自定义组件可以类比vue的自定义组件
### 1. 基本使用
- (1) 组件也有4个文件, wxml,js,json,wxss
- (2) 组件使用Component构造器初始化
```
// 组件基础代码如下:
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

```
### 2. 组件通信
组件通信包含:
- (1) 父 --> 子 通信
- (2) 子 --> 父 通信
#### (1)父 --> 子 通信
##### >1 采用properties
> 类似于vue的props组件数据传输方式, 个人比较推荐这种方式.
```
<!-- 父组件代码 -->
<communication str="{{str}}" arr="{{arr}}"></communication>
```
```
// shareComponents/communication/communication.wxml
<text>properties (str): {{str}}</text>
<view>
  <text>properties (arr): </text>
  <text wx:for="{{arr}}" wx:key="index">{{item.username}},</text>
  <button size="mini" bindtap="outEvent">传出数据</button>
</view>


<!-- 子组件代码 -->
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
  }
})
```

##### >2 获取子组件实例,直接调用(个人不推荐)
> 个人认为此种方式使用虽超级方便, 但是会使得父子组件耦合严重, 失去了组件抽离代码的本意.
```
<!-- 父组件wxml -->
<communication class="communication"></communication>

<!-- 父组件js -->
const child = this.selectComponent('.communication');
console.log(child);
child.logData();
```
```
<!-- 子组件logData方法定义 -->
// shareComponents/communication/communication.js
Component({
  ...
  methods: {
    // 供外部调用使用,但是一般不建议
    logData() {
      console.log('外部调用');
    }
  }
})

```
#### (2)子 --> 父 通信
采用类似vue的$emit方式, 微信小程序用的是triggerEvent
```
<!-- 父组件wx代码 -->
<communication str="{{str}}" arr="{{arr}}" bind:myevent="onMyEvent"></communication>

<!-- 父组件js代码 -->
// pages/share/share.js
Page({
...
  // 接受子组件传出的数据
  onMyEvent(e) {
    console.log('子组件传出数据', e.detail);
  }
})
```
```
<!-- 子组件代码 -->
this.triggerEvent('myevent', {username: '王无', age: 9000});
```

### 3. 数据监听器
observers类似于vue的watch, 但是又比watch功能多一点, observers可以监听对象的某一个属性变化,也可以监听数组的某一项的变化.
```
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
    // 监听字符串变量的变化
    'name': function(val) {
      console.log('监控到内部变化数据:', val);
    },
    // 监听数组某一项变化
    'list[3]': function(val) {
      console.log('监控到内部变化数据:', val);
    },
    // 监听对象某一属性值变化
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

```
### 4. 组件代码抽离
behaviors类似于vue的mixins, 可以自行参考.
https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html

## 三. 实例todolist
