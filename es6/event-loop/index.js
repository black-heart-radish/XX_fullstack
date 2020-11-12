async function async1() {
    console.log('async1 start');      
    await async2();                   
    // console.log('async1 end');  //微任务1
}
async function async2() {
    console.log('async2 start');
    return new Promise((resolve, reject) => {
        resolve();
        console.log('async2 promise');
    })
}
console.log('script start');         // script start     async1 start    async2 start   async2 promise  promise1
setTimeout(function () {  //宏任务   // script end  promise2  promise3  setTimeout
    console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {  // 微任务2
    console.log('promise2');
}).then(function () {
    console.log('promise3');
});
console.log('script end');


// console.log(1);   // 1 7 3 2 5 6 4
// async function bar() {
//   await fn()     // 立即执行
//   console.log(6);  // 微任务里
// }
// function fn() {
//   console.log(7);
// }
// function foo() {
//   return new Promise((resolve) => {
//     console.log(2);
//     resolve()
//   })
// }
// bar()
// console.log(3);

// foo().then(() => {
//   console.log(4);
// })
// console.log(5);