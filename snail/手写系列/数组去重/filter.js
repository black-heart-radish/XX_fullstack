let arr = [1, 2, 1, 1, '1']

function unique (arr) {
  let res = arr.filter(function (item, index, arr) {
    // return arr.indexOf(item) === index
    return !index || item !== arr[index - 1]
  })
  return res
}

console.log(unique(arr));


// es6
function unique2 (arr) {
  // return Array.from(new Set(arr))
  return [...new Set(arr)]
}

let unique3 = arr => [...new Set(arr)]