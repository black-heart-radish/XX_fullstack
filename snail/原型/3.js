Person.prototype.lastName = '刘';
function Person(name) {
    this.name = name;
}

var person = new Person('志鹏');

console.log(person.lastName + person.name);
console.log(person.constructor);

// 修改原型属性
// person.lastName = '王';   // 没有改动原型属性，只是在自己的对象中添加了一个lastName属性
// Person.prototype.lastName = '王';   // 改原型属性只能去原型
// console.log(person.lastName + person.name);
// console.log(person.__proto__);


// 删除原型属性
// delete Person.prototype.lastName;
// console.log(person.lastName);


// function Bus() {

// }

// Car.prototype = {
//     constructor: Bus
// }
function Car() {

}
var car = new Car();
console.log(car.constructor);     // constructor 指向的是Car()，目的是让Car()构造出来的对象想要找到