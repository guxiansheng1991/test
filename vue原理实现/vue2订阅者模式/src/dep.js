class Dep {
    constructor() {
        this.subs = [];
    }

    // 添加订阅者
    addSub(sub) {
        if (sub && this.subs.indexOf(sub) === -1) {
            this.subs.push(sub);
        }
    }

    // 通知变更
    notify() {
        this.subs.length > 0 && this.subs.forEach(sub => {
            sub.update();
        });
    }

}

Dep.depTarget = null;

export default Dep;