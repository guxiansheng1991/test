/**
 * 发布订阅者模式：
 * 发布者和订阅者中间加入订阅平台的逻辑，实现发布者和订阅者的解耦
 * 
 * 这里以报社，邮局，读者为例，是一个典型的多对多的通信。
 * 一个报社可以给多个邮局送报纸，一个邮局也能订多个报社的报纸。
 * 一个邮局可以为多个读者配送报纸，一个读者也能接受多个邮局的报纸。
 * 在这个例子中，邮局就属于订阅平台，使得报社和读者解耦，不必再让报社和读者直接通信。
 */

/** 报社，担任发布者的角色 */
class Newspaper {
    constructor(name) {
        this.name = name;
        // 每个报社都维护一个邮局的列表
        this.postOffices = [];
    }

    // 报社发布报纸行为，需要通知邮局来取报纸
    publish(name) {
        this.postOffices.forEach(postOffice => {
            postOffice.getPaper(name);
        });
    }

    /** 新增邮局 */
    addPostOffice(name) {
        this.postOffices.push(name);
    }
}

/** 邮局，担任发布平台的角色 */
class PostOffice {
    constructor(name) {
        this.name = name;
        // 邮局要维护一份从本邮局取报纸的读者
        this.readers = [];
    }

    /** 新增读者 */
    addReader(reader) {
        this.readers.push(reader);
    }

    /** 从报社获得报纸，然后发给读者 */
    getPaper(paperName) {
        this.readers.forEach(reader => {
            reader.getMyPaper(paperName, this.name);
        });
    }
}

/** 读者，担任订阅者的角色 */
class Reader{
    constructor(name) {
        this.name = name;
    }

    getMyPaper(paperName, postOfficeName) {
        console.log(`读者${this.name}收到了邮局${postOfficeName}送来的报纸`);
    }

    // 读者主动订阅平台
    addPostOffice(postOffice) {
        postOffice.addReader(this);
    }
}


const newsPaper = new Newspaper('报社A');
const postOfficeA = new PostOffice('邮局A');
const postOfficeB = new PostOffice('邮局B');
const postOfficeC = new PostOffice('邮局C');

newsPaper.addPostOffice(postOfficeA);
newsPaper.addPostOffice(postOfficeB);
newsPaper.addPostOffice(postOfficeC);

const readerA = new Reader('读者A');
const readerB = new Reader('读者B');
const readerC = new Reader('读者C');

readerA.addPostOffice(postOfficeA);
readerA.addPostOffice(postOfficeB);

readerB.addPostOffice(postOfficeA);
readerB.addPostOffice(postOfficeB);
readerB.addPostOffice(postOfficeC);

readerC.addPostOffice(postOfficeA);
readerC.addPostOffice(postOfficeC);


newsPaper.publish('新华日报');