let key1 = Symbol(1);
let key2 = Symbol(1);

console.log(key1 === key2);   // true

console.log(typeof(null));    // object

let obj = {
    name: 'wn'
}

const a = []
const b = a;
b.push(1);
console.log(a);


function test(person) {
    person.age = 26;
    person = {    // 假设地址为#002
        name: 'yyy',
        age: 30
    }
    return person;
}
const p1 = {  // 假设地址为#001
    name: 'xxx',
    age: 25
}
const p2 = test(p1);
console.log(p1);     // { name: 'xxx', age: 26 }
console.log(p2);     // { name: 'yyy', age: 30 }


// 1. 函数传参是传递对象指针的副本
// 2. p1和person 具有相同的指针. person被修改，p1也会被修改
// 3.person拥有一个新的内存地址

console.log([] instanceof Array);
console.log([] instanceof Object);
console.log('hello' instanceof String);   // false

class PrimitiveString {
    static [Symbol.hasInstance] (x) {  // Symbol.hasInstance让我们自定义instanceof行为
        return typeof x === 'string'
    }
}

console.log('hello' instanceof PrimitiveString);