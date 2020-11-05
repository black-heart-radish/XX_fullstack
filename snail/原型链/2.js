// var obj = {
// }
// console.log(obj);
// =
// var obj = new Object();
// console.log(obj);


var obj = {
    name: 'wn',
    age: 18
}
var obj1 = Object.create(obj);
console.log(obj1);

// 网易面试题
// 所有对象最终都会继承自 Object.prototype  ???   错
// 答案： Object.create(null)  特例
//       这玩意还是个对象，但是里面啥也没有，默认属性也么得
//       var obj2 = Object.create(null);
//       obj2.__proto__ = {name: 'wn'}
//       这样并不会添加一个原型对象，只是普通的属性而已