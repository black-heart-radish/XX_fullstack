var Person = function () {

}
Person.prototype.description = function () {
    console.log('你是真的狗');
}
// 查看Person结构
console.dir(Person);  // [Function: Person]

// 通过instanceof检查实例与构造函数的关系
var person = new Person();
console.log(person instanceof Person);  // true

// 实例继承构造函数的原型对象的属性
person.description();  // 你是真的狗

// 通过构造函数查看原型对象(prototype)
console.log(Person.prototype);  // Person { description: [Function] }

// 通过构造函数查看原型对象的constructor
console.log(Person.prototype.constructor);  // [Function: Person]

// 通过构造函数观察原型对象的constructor是否为构造函数
console.log(Person.prototype.constructor === Person);  // true

// 通过实例查看原型对象(__proto__)
console.log(person.__proto__);  // Person { description: [Function] }

// 通过实例查看原型对象的constructor
console.log(person.__proto__.constructor);  // [Function: Person]

// 通过实例观察原型对象的constructor是否为构造函数
console.log(person.__proto__.constructor === Person);  // true

// 观察通过构造函数获取的原型对象与实例获取的原型对象是否为同一个
console.log(Person.prototype === person.__proto__);  // true

// 原型对象的原型对象
console.log(Person.prototype.__proto__);  // {}

// 原型对象的原型对象的constructor
console.log(person.__proto__.__proto__.constructor);  // [Function: Object]

// 原型对象的原型对象的原型对象
console.log(person.__proto__.__proto__.__proto__);  // null

// 构造函数的__proto__是一个函数
console.log(Person.__proto__);  // [Function]

// 原型对象的原型对象的原型对象的constructor,null木得构造函数
// console.log(person.__proto__.__proto__.__proto__.constructor);
// TypeError: Cannot read property 'constructor' of null