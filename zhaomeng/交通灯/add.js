// 大整数相加
function add(num1, num2) {
    let carry = 0,
        res = '';
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
        let a = num1.charAt(i) || 0;
        let b = num2.charAt(j) || 0;
        let sum = Number(a) + Number(b) + carry;
        sum >= 10 ? carry = 1 : carry = 0;
        res = (sum % 10) + res;
    }
    if (carry === 1) {
        res += 1;
    }
    return res;
}
console.log(add('99','9'));