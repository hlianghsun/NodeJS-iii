var eventEmitter = require("events");
var events = new eventEmitter();

//綁定事件
events.on("message", function (data) {
    console.log(data);
});
events.on("end", function () {
    console.log("event closed");
});

//引發事件
events.emit("message", "Hello Events!!");

setTimeout(function () {
    events.emit("end");
}, 3000);
