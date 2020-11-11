var missingNumber = function(nums) {
    const n = num.length;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < n + 1 ; i++) {
        sum1 += i;
        sum2 += (nums[i] || 0);
    }
    // for (let n of nums) {
    //     sum2 += n
    // }
    return sum1 - sum2;
};