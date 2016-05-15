var express = require('express');
var router = express.Router();

/* GET users listing. * /
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.route("/")
      .get(function (req, res) {
          res.render('user',{title:'titlt!!!',int:13});
          
          //res.send("return all users");
      })
     .post(function (req, res) {
         //console.log(req.body);  //{name:'Jack',age:28}
         res.send("create user " + JSON.stringify(req.body));
     });
     
router.route("/:id")
      .get(function (req, res) {
          res.send("get user " + req.params.id);
      })
      .delete(function (req, res) {
          res.send("delete user " + req.params.id);
      })
      .put(function (req, res) {
          res.send("update user " + req.params.id + "," + JSON.stringify(req.body));
      });



module.exports = router;
