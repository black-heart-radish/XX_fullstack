let arr = [1, 2, 3, 1, '1', '1']

// 利用 indexOf() 进行去重
// function unique (arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (res.indexOf(arr[i]) === -1) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }
// console.log(unique(arr));


// 先排序，再去重，只要比较相邻的元素就行  O(2n)
function unique (arr) {
  arr.sort()
  let res = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      res.push(arr[i])
    }
  }
  return res
}
console.log(unique(arr));