var fs = require("fs");

//讀出資料夾中的檔案
//fs.readdir('.', function (err, files) {
//    if (err) throw err;

//    for (var i in files) {
//        console.log(files[i]);
//    }
//})

fs.exists('data.txt', function (exists) {
    console.log(exists);
    if (exists) {
        console.log("檔案存在!!");
        //刪除檔案
        //fs.unlink('data.txt', function (err) {
        //    if (err) throw err;
        //    console.log("檔案刪除成功!!");
        //})

        //讀取檔案  data.toString() buffer物件的內容轉成字串
        fs.readFile('data.txt','utf-8', function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    } else {
        console.log("檔案不存在!!");
    }
});

//監控資料夾
//fs.watch('.', function (event, fileName) {
//    console.log(event, fileName);
//})