let arr = [5, 3, 4, -1, -2, 9, -8];
// 分治思想!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function cb(a, b) {
    return a - b;
}
function partition(arr, left, right) {
    if (left >= right) {
        return;
    }
    // 基准值
    let privt = arr[left];
    let i = left,
        j = right;
    while(i < j) {
        // cb(arr[j], privt) <= 0
        // arr[j] <= privt
        // 在右边找到 < privt
        // 把arr[j] >= privt换成cb(arr[j], privt) <= 0可实现类似sort
        while(arr[j] >= privt && i < j) {
            j--;
        }
        arr[i] = arr[j]
        // 在左边找到 > privt
        while(arr[i] <= privt && i < j) {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = privt;
    partition(arr, left, i - 1);
    partition(arr, i + 1, right);
}
function sort(arr) {
    partition(arr, 0, arr.length - 1);
    return arr;
}
console.log(sort(arr));