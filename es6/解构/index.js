// 传统
// let a = 1;
// let b = 2;
// let c = 3;

// 数组解构!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let [a, b, c] = [1, 2, 3];
// 或
// let [a, b, c] = [1, [2, 3]];
// 或
// let [ ,  , c] = [1, 2, 3];
// console.log(c);  //都是3

// ...
// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7];
// console.log(c);   // [ 3, 4, 5, 6, 7 ]
// let [a, b, ...c] = [1];
// console.log(c);   // []

// 错误写法
// let [a] = 1;  // 等号右边必须要具备迭代器属性



// set(是一种数据结构，不允许出现重复项)
// let arr = [1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8, 9];
// let newArr = new Set(arr);
// console.log(newArr);   // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9 }   (Set对象,与Object对象不一样的)

// 数组对应对象不能解构，下面会报错
// let [x, y, z] = {a: 'a', b: 'b', c: 'c'}
// console.log(x);  // 错误

// Set对象就可以的
// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x);

// 解构可以赋默认值
// 不赋值，默认值
// let [foo = true] = []
// console.log(foo);
// 赋值，赋值的值
// let [foo = true] = [false]
// console.log(foo);

// 没有值得变量就是undefinded,这里的y值为b
// let [x, y = 'b'] = ['a', undefined];
// console.log(y);  // b
// 如果是赋值null 就行
// let [x, y = 'b'] = ['a', null];
// console.log(y);  // null


// 对象的解构，根据key值!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let {x, y, z} = {y: 'bbb', x: 'aaa'};
// console.log(x);   // aaa
// console.log(z);   // undefined

// 可以把Math对象的方法copy引用下来
// let {log, sin, cos, abs} = Math
// console.log(abs(-2));

// 可以把console对象的log方法引用下来
// const {log} = console
// log('把console.log方法引用了下来')


// let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
// console.log(baz);  // aaa       这个console.log(foo);是错误的

// let obj = {
//     p: ['hello', {y: 'world'}]
// }
// let {p: [x, {y}]} = obj;
// console.log(x + y);

// 解构字符串
let [a, b, c, d, e] = 'hello';
console.log(c);  // l