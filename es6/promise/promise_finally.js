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
            reject('c_reject');
        }, 500)
    })
}

function d() {
    console.log('ddd');
}

// finally不管前面的是否resolve,reject（成功还是失败）都会执行
a().then(b).then(c).finally(d);