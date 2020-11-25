// Person.prototype.say = function() {
//     console.log('hahaha');
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let person = new Person('小敏', 18);
// console.log(person);


function myNew() {
    let obj = {};
    // 取到外部传入的构造器
    let Constructor = Array.prototype.shift.call(arguments)
    // 实现继承
    obj.__proto__ = Constructor.prototype;
    let result = Constructor.apply(obj, arguments)
    return obj;
}
let person =myNew(Person, '小敏');
console.log(person);


