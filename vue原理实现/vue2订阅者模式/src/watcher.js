import Dep from './dep.js';

// 通过ID区分不同的订阅者
let id = 0;

class Watcher {
    constructor (value, cb) {
        this.cb = cb;

        this.get();

        this.val = value;

        this.id = ++id;
    }

    get() {
        Dep.depTarget = this;
        this.cb();
        Dep.depTarget = null;
    }

    update() {
        this.get();
        console.log('val value', this.val.name, this.val.info.message);
    }
}

export default Watcher;