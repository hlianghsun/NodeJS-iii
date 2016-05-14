﻿var http = require("http"),
path = require("path"),
fs = require("fs");
extensions = {
".html": "text/html",
".css": "text/css",
".js": "application/javascript",
".png": "image/png",
".gif": "image/gif",
".jpg": "image/jpeg"
};

http.createServer(function(req, res) {
  var filename = path.basename(req.url) || "Index.html",
  ext = path.extname(filename),
  dir = path.dirname(req.url).substring(1),
  localPath = __dirname + "\\public\\";

  //console.log(req.url);
 // console.log(path.basename(req.url));
  if (extensions[ext]) {
    localPath += (dir ? dir + "/" : "") + filename;
    fs.exists(localPath, function (exists) {
        console.log(localPath + " exists? " + exists);
        if (exists) {
            getFile(localPath, extensions[ext], res);
        } else {
            res.writeHead(404);
            res.end();
        }
    });
  }
}).listen(3000);

function getFile(localPath, mimeType, res) {
  fs.readFile(localPath, function(err, contents) {
    if (!err) {
      res.writeHead(200, {
        "Content-Type": mimeType,
        "Content-Length": contents.length
      });
      res.end(contents);
    } else {
      res.writeHead(500);
      res.end();
    }
  });
}
console.log("伺服器執行在3000port");
