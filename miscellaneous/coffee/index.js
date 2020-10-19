// talk in js
// 一杯热咖啡
// es5类 大写的函数
// 1. 把水煮开
// 2. 用沸水冲泡咖啡
// 3. 把咖啡倒进杯子
// 4. 加糖和牛奶
// constructor
// 类 抽象的
// 实例化 对象
// 封装类的
var Coffee = function (type) {
    // {}new的时候this指向实例对象
    this.type = type
}
// 原型
Coffee.prototype.boilWater = function () {
    console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function () {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function () {
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function () {
    console.log('加糖和牛奶');
}
Coffee.prototype.init = function () {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pureInCup();
    this.addSugarAndMilk();
}
var oneCoffee = new Coffee('猫屎咖啡');
// {}
console.log(oneCoffee.type);
console.log(oneCoffee);
console.log(oneCoffee.__proto__);
console.log(oneCoffee.__proto__ == Coffee.prototype);
console.log(Coffee.__proto__);  //一个方法
oneCoffee.init();
// class
// js类 怎么样构建起来的 = 火车头 构造函数 （首字母大写）+ 好多节车厢 prototype
// 构造函数和普通函数区别是 new
// 函数是一等对象
// js本没有类
// 只有对象  new {}
// 任何函数都有一个prototype属性
// 原型链
console.log(Coffee.prototype);
console.log(Coffee.prototype.constructor == Coffee);
console.log(Coffee.prototype.__proto__);
console.log(Coffee.prototype.__proto__.constructor);
console.log(Coffee.prototype.__proto__.__proto__);