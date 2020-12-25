// function a () {
//   setTimeout(() => {
//     console.log('a');
//   }, 1000)
// }

// setTimeout被定义出来的那一刻就是异步的
function b () {
  setTimeout(() => {
    console.log('b');
  })
}

// a()
// b()

// b()
// a()

function a () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a');
      // resolve('ok')
      reject('err')
    }, 1000)
  })
}

// a().then(b)
// a().catch(b)

a().then(
  res => {
    console.log(res);
  },
  // 效果和 .catch 里边儿是一毛一样的
  err => {
    console.log(123);
  }
)