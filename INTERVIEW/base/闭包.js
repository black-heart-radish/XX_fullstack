// function A() {
//     let a = 1;
//     window.B = function() {
//         console.log(a);
//     }
// }
// A();
// B();   



// for (var i = 1; i <= 5; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(j);
//         }, j * 1000);
//     })(i)
// }



for (var i = 1; i <= 5; i++) {
    setTimeout(
        function timer(j) {
            console.log(j);
    }, 
    i * 1000,
    i);
}