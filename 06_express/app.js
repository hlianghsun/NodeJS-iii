var express = require("express");
var app = express();
var staticPath = __dirname + "/public";
app.use(express.static(staticPath));
//app.use(express.static(__dirname + "/public", {index:'About.html'}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    //res.send("<h1>Hello Express!!</h1>");

    //res.sendFile(staticPath + "/Index.html");

    res.render('Index.html');
})
//http://localhost/about
app.get("/about", function (req, res) {
    //res.send("<h1>About us!!</h1>");
    //res.sendFile(staticPath + "/About.html");
    res.render("About.html");
})
//http://localhost/contact
app.get("/contact", function (req, res) {
    //res.send("<h1>Contact us!!</h1>");
    //res.sendFile(staticPath + "/Contact.html");
    res.render("Contact.html");
})

app.get("/first", function (req, res) {
    res.render('first', {title:"express"});
})
app.listen(3000);
console.log("程式執行@3000");