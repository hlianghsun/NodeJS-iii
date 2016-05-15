var http = require('http');
var fs = require('fs');

function sendServerSendEvent(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        //'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    var sseId = (new Date()).toLocaleTimeString();

    setInterval(function () {
        writeServerSendEvent(res, sseId, (new Date()).toLocaleTimeString());
    }, 1000);

    writeServerSendEvent(res, sseId, (new Date()).toLocaleTimeString());
}

function writeServerSendEvent(res, sseId, data) {
   // res.write('id: ' + sseId + '\n');
    res.write("data: " + data + '\n\n');
   // res.write("retry: 1000 \n");
}

http.createServer(function (req, res) {
    if (req.headers.accept && req.headers.accept == 'text/event-stream') {
        if (req.url == '/events') {
            sendServerSendEvent(req, res);
        } else {
            res.writeHead(404);
            res.end();
        }
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
      res.write(fs.readFileSync(__dirname + '/Client.html'));
       res.end();
    }
}).listen(3000);
console.log("伺服器執行@3000");