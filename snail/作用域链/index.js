function test() {

}

// test.name   test.prototype
// test.[[scope]]  隐式属性，不能被拿粗来使用

// test()    ---> AO:{}  回收


// function a() {
//     function b() {
//         var b = 222
//     }
//     var a = 111
//     b()
//     console.log(a);
// }
// var glob = 100
// a()

//a 定义 a.[[scope]] --->0:GO:{}
//a 执行 a.[[scope]] --->0:aAO:{} 1:GO{}
//b 定义 a.[[scope]] --->0:aAO:{} 1:GO{}
//b 执行 a.[[scope]] --->0:bAO:{} 1:aAO:{} 2.GO:{}

//b 执行完 b的AO就要销毁
//紧接着a也说，我也执行完了，我的AO也要销毁，因为a的AO包含了b的函数，当a的AO销毁时b函数会失效


function a() {
    function b() {
        function c() {

        }
        c();
    }
    b();
}
a();