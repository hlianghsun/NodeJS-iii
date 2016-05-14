var events = require("events");
var util = require("util");

var myObject = function () {
    //定義屬性
    this.count = 0;
    //定義方法
    this.touch = function () {
        this.count++;
        //引發事件
        this.emit('touched', this.count);
    }
}

//繼承EventEmiter讓myObject得到事件驅動的能力
util.inherits(myObject, events.EventEmitter);

//產生物件
var myObj = new myObject();
//綁定事件
myObj.on("touched", function (data) {
    console.log("touched : " + data);
});

myObj.touch();
myObj.touch();
myObj.touch();