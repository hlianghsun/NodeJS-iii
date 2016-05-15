var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    fs.readFile("./index.html", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, 'utf-8');
    });
}).listen(3000);

//引用socket.io
var io = require("socket.io").listen(server);
io.on("connection", function (socket) {
    console.log("User Connected!!");
    //發送訊息到client端
    socket.emit("message", "user has connected!!")

    //接收client端傳過來的資料    
    socket.on("message", function (data) {
        //廣撥給其它連線的使用者
        //socket.broadcast.emit("message", data);

        //廣撥給自己及其它連線的使用者
        io.emit("message", data);
    })

    socket.on("disconnect", function () {
        console.log("User disconnected!!");
    })

});




console.log('伺服器執行@3000');
