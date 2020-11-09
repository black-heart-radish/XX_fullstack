// JS是单线程语言

// 同步代码
// function a() {
//     console.log('蜗牛');
// }

// function b() {
//     console.log('酒神');
// }

// function c() {
//     console.log('婷婷');
// }
// a();  
// b();
// c();
// // 打印结果：
// // 蜗牛
// // 酒神
// // 婷婷

// 需要耗费时间的就是异步
function a() {
    setTimeout(() => {
        console.log('蜗牛');
    });
}

function b() {
    console.log('酒神');
}

function c() {
    console.log('婷婷');
}
a();
b();
c();
// // 打印结果：
// // 酒神
// // 婷婷
// // 蜗牛