import Dep from './dep.js';
const typeTo = (val) => Object.prototype.toString.call(val);

function defineReactive(obj, key, val) {
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`get key: ${key}`);

            if (Dep.depTarget && Dep.depTarget.id > 0) {
                console.log(`当前订阅者id：${Dep.depTarget.id}`);
            }

            dep.addSub(Dep.depTarget);
            return val;
        },
        set(newVal) {
            if (newVal === val) return;
            val = newVal;
            dep.notify();
        }
    });
}

// 逐个遍历对象的属性，为属性做数据劫持
function walk(obj) {
    Object.keys(obj).forEach(key => {
        if (typeTo(obj[key]) === '[object Object]') {
            walk(obj[key]);
        }
        // 执行数据劫持
        defineReactive(obj, key, obj[key]);
    });
}

function observe(obj) {
    if (typeTo(obj) !== '[object Object]') {
        return null;
    }

    walk(obj);
}

export default observe;