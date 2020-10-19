var Beverage = function () {
    
}
Beverage.prototype.boilWater = function () {
    console.log('把水煮沸');
}
// 冲泡 空的方法
Beverage.prototype.brew = function () {
    console.log('冲泡饮料');
}
// 把饮料倒进杯子
Beverage.prototype.pureInCup = function () {
}
Beverage.prototype.addCondiments = function () {
}
Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pureInCup();
    this.addCondiments();
}
var Coffee = function () {

}
Coffee.prototype = new Beverage();
console.log(Coffee.prototype);
Coffee.prototype.brew = function () {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function () {
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments = function () {
    console.log('加糖和牛奶');
}
var oneBeverage = new Beverage();
oneBeverage.init();
var oneCoffee = new Coffee();
oneCoffee.init();