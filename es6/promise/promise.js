function xq () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('酒神相亲???');
            resolve('成功了');
            // reject('鸡你太美');
        }, 1000);
    });
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚顺利，大吉大利!!!');
            resolve('洞房花烛夜');
            // reject('被媳妇赶出来了');
        }, 500);
    })
}

function baby() {
    console.log('小酒神降世');
}

xq()
    .then(res => {
        console.log(res);

        return marry();   // 这样写需要 return 出来

        // marry().then(result => {
        //     console.log(result);
        //     baby();
        // });
    })
    .catch(err => {
        console.log(err);
    })
    .then(result => {
        console.log(result);
        baby();
    });