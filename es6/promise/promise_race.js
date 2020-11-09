function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aaa');
            resolve('a_OK');
        }, 1000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bbb');
            resolve('b_OK');
        }, 1500)
    })
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ccc');
            resolve('c_OK');
        }, 500)
    })
}

function d() {
    console.log('ddd');
}

// race里有一个执行完成就执行then
Promise.race([a(), b(), c()]).then(d);