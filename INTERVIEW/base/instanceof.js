let arr = [];
// arr instanceof Array
function instance_of (L, R) {
    L = L.__proto__
    let O = R.prototype
    while (true) {
        if(L === null) {
            return false
        }
        if (O === L) {
            return true
        }
        L = L.__proto__
    }

}
console.log(instance_of(arr, Array));