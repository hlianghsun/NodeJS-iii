var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/MyDB');

var userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

var Users = mongoose.model('Users', userSchema);

new Users({ name: 'Tom', age: 10 }).save(function (err, user) {
    if (err) throw err;
    console.log('----- save ------');
    console.log(user);
});

new Users({ name: 'Tom', age: 10 }).save(function (err, user) {
    if (err) throw err;
    console.log('----- save ------');
    console.log(user);
});



Users.find({}, function (err, users) {
    console.log('----- find ------');
    console.log(users);
});