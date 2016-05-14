var http = require("http"),
    querystring = require("querystring");

http.createServer(function (req, res) {
    //console.log(req.url);
    var qs = req.url.split("?")[1];    //name=Mary&age=30
    var obj = querystring.parse(qs);//{name:"Mary",age:30}
    //console.log(obj.name);
    //console.log(obj.age);

    res.writeHead(200, { "ContentType": "text/html" });
    res.end("<h1>Hello " + obj.name + "(" + obj.age + ")!!</h1>");

}).listen(3000);
console.log("伺服器執行中@3000");



//http://localhost:3000/?name=Jack&age=20