let arr1 = [1, 2, '1', 2, 1]
let arr2 = [1, 1, '1', 2, 2, 'a', 'A', 'a',]

function unique (arr, isSorted, iteratee) {
  let res = []
  let seen = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let value = arr[i]
    let computed = iteratee ? iteratee(value, i, arr) : value
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    } else if (res.indexOf(value) === -1){
      res.push(value)
    }
  }
  return res
}

console.log(unique(arr2, false, function (item) {
  return typeof item == 'string' ? item.toLowerCase() : item
}));