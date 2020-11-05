function myPerson(name, age) {
    var that = {}
    that.name = name;
    that.age = age;
    return that;
}
var person1 = myPerson('wn', 18);
var person2 = myPerson('蜗牛', 18);
console.log(person1);
console.log(person2);


// 构造函数是不需要返回值的，但是有返回值也不是错的，不同的返回类型来康康
function Car(color) {
    this.color = color;
    this.name = 'BMW';
    return 'k123';
}
var car = new Car('red');
console.log(car);

function Car1(color) {
    this.color = color;
    this.name = 'BMW';
    return {};
}
var car1 = new Car1('red');
console.log(car1);

function Car2(color) {
    this.color = color;
    this.name = 'BMW';
    return function() {};
}
var car2 = new Car2('red');
console.log(car2);