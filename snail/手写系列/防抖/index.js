// 在一定的时间内，如果持续请求，就一直不执行，在规定的时间内没有第二次操作才执行
function debounce(fn, delay) {
    let timer = null;
    return function() {
        // const context = this;   // 如果下面定时器里面不是箭头函数，为普通的function() {}，this会被修改
        let arg = arguments;       // fn.apply(context, arg);
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(arg);
        }, delay)
    }
}