// Person.prototype ---原型
// console.log(Person.prototype);    函数被定义出来的那一刻就一定有prototype属性

function Person(name) {
    this.name =name;
}
// var person = new Person('蜗牛');
// console.log(person);
// console.log(Person.prototype);
// console.log(person.__proto__);



// var person1 = new Person();
// console.log(person1.name);


Person.prototype.name = '傻逼';
Person.prototype.say = function() {
    console.log('你是真的狗');
}
var person = new Person();
person.say();