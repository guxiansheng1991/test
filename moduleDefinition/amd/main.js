require(['./m1', './m2'], function(m1, m2) {
  m1.add(1, 3);
  m2.add2(2, 4);
  console.log('main.js 模块加载成功');
});

/**
 * AMD
 * require.js中, 官方推荐依赖先执行完, 后加载模块内容; 但是也是能进行就近加载的
 */