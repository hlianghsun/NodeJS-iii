var http = require("http"),
    fs = require("fs"),
    path = require("path");
http.createServer(function (req, res) {
    //console.log(req.url);
    var fileName = path.basename(req.url) || "Index.html",
        ext = path.extname(fileName),
        localPath = __dirname + "\\public\\";
    //console.log(ext);    
    //console.log(fileName);
    //console.log(__dirname);
  // if (ext == ".html") {
        localPath += fileName;
        fs.exists(localPath, function (exists) {
            if (exists) {
                //讀檔案
                //console.log(localPath);
                getFile(localPath, res);
            } else {
                res.writeHead(404);
                res.end();
            }
        })
    //}
}).listen(3000);

function getFile(filePath, res) {
    fs.readFile(filePath, function (err, datas) {
        if (!err) {
            res.writeHead(200, { "Content-Type": "text/html", "Content-Length": datas.length });
            res.end(datas);
        } else {
            res.writeHead(500);
            res.end();
        }
    });  
    
    
}
console.log("伺服器執行在3000port");