var mod1 = require('./mod1.js');
var mod2 = require('./mod2.js');
console.log(mod1);  //{}
console.log(mod1("APPLE")); //mod1 is not a function
console.log(mod2);  //[function]
console.log(mod2("APPLE")); //apple
//console.log(mod1.name);
//console.log(mod1.lower("APPLE"));
//console.log(mod1.upper("mango"));
//console.log(mod1.get_name());
//console.log(mod2.name);
//console.log(mod2.lower("APPLE"));
//console.log(mod2.upper("mango"));
//console.log(mod2.get_name());

//使用require()引用module回傳的是module.exports