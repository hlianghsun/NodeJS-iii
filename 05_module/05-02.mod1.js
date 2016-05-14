//var name = exports.name = "Tom";
//exports.lower = function (input) {
//    return input.toLowerCase();
//}
//exports.upper = function (input) {
//    return input.toUpperCase();
//}
//exports.get_name = function () {
//    return name;
//}

//產生了一個新的物件
////exports 不等於 module.exports
exports = function (input) {
    return input.toLowerCase();
}

//exports就是module.exports的簡單寫法
//exports = module.exports = {}
//就直接用 module.exports

