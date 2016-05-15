var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

//建立或開啟資料庫
mongoose.connect("mongodb://localhost/userDB");

//建立Schema產生Model
var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 20, max: 100 }
});
var User = mongoose.model("User", userSchema);

//顯示所有User資料
router.get("/", function (req, res) {  
    User.find({}, function (err, users) {
        if (err) throw err;     
        res.render("users", { title: "Express MongoDB", users: users })
    })
})

//回傳新增User介面
router.get("/add", function (req, res) {
    res.render("usernew",{title:"add user"});
})
//新增User資料
router.post("/add", function (req, res) {
    //console.log(req.body);
    var user = new User(req.body);
    user.save(function (err) {
        if (err) throw err;
        console.log("save success!!");
        res.redirect("/users");
    })
    
})

//回傳修改User介面
router.get("/edit/:id", function (req, res) {
    User.findById(req.params.id, function (err, user) {
         if (err) throw err;
        // show the one user
        res.render('useredit', {
            title: 'User Edit',
            user: user
        });
    });
})
router.post("/edit/:id", function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
        if (err) throw err;
        
        res.redirect('/users');
    });
})


//刪除
router.get('/delete/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;
        
        res.redirect('/users');
    });
})



/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('all users');
//});
//var users = [{ name: "Jack", email: "Jack@gmail.com", age: 28 },
//             { name: "Mary", email: "Mary@gmail.com", age: 34 },
//             { name: "Tom", email: "Tom@gmail.com", age: 39}];
//router.route("/")
//      .get(function (req, res) {
//          //res.send("return all users");
//          res.render("users", {"title":"Users Page","users":users})
//      })
//     .post(function (req, res) {
//         //console.log(req.body);  //{name:'Jack',age:28}
//         res.send("create user " + JSON.stringify(req.body));
//     })
//router.route("/:id")
//      .get(function (req, res) {
//          res.send("get user " + req.params.id);
//      })
//      .delete(function (req, res) {
//          res.send("delete user " + req.params.id);
//      })
//      .put(function (req, res) {
//          res.send("update user " + req.params.id + "," + JSON.stringify(req.body));
//      })
module.exports = router;
