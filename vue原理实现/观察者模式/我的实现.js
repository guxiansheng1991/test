/**
 * 观察者模式的原理：
 * 被观察者维护观察者队列，当被观察者发生变化了，通知所有观察者。
 * 
 * 本人的实现方式就是对的
 */
class Store {
    constructor() {
        this.products = [];
        this.observers = [];
    }

    addProduct(product) {
        this.products.push(product);
        this.notifyObservers(product);
    }

    notifyObservers(product) {
        this.observers.forEach(observer => {
            observer.getUpdate(product);
        });
    }

    addObserver(observer) {
        this.observers.push(observer);
    }
}

class Watcher {
    constructor(name) {
        this.name = name;
    }
    getUpdate(product) {
        console.log(`${this.name} get update ${product}`);
    }
}

const store = new Store();
const watcher1 = new Watcher('观察者1');
const watcher2 = new Watcher('观察者2');
store.addObserver(watcher1);
store.addObserver(watcher2);

store.addProduct('新产品');

setTimeout(() => {
    store.addProduct('新产品222');
}, 3000);