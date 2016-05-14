//建立物件
var myObject = function () {
    //定義屬性
    this.count = 0;
    //定義方法
    this.touch = function () {
        this.count++;
    }
}

//產生物件
var myObj = new myObject();
myObj.touch();
myObj.touch();
myObj.touch();

console.log(myObj.count);
