// 创建Object新实例，再给它添加属性和方法
let person = new Object;
person.name = '老王';
person.age = 30;
person.job = 'Software Engineer';
person.sayName = function() {
    console.log(this.name);
}
person.sayName();