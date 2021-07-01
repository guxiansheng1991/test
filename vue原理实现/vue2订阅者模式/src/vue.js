// 引入数据劫持的函数
import observer from './observer.js';
// 引入观察者
import Watcher from './watcher.js';

class Vue {
    constructor(options) {
        this.$options = options;
        this._data = options.data();
        this.render = options.render;
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;

        // 进行数据劫持
        observer(this._data);

        new Watcher(this._data, () => {
            this.$mount();
        });
    }

    // 这里就是创建html节点
    createElement(tagName, children) {
        let element = document.createElement(tagName)

        if (Object.prototype.toString.call(children) === '[object Array]') {
            children.forEach((child) => {
                element.appendChild(child)
            })
        } else {
            element.textContent = children
        }

        return element
    }

    $mount() {
        const elements = this.render(this.createElement);
        this.$el.innerHTML = '';
        this.$el.appendChild(elements);
    }
}

export default Vue;