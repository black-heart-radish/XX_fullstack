// 转化时间的函数
let timeChange = function () {
  date = new Date()
  let year = date.getFullYear()
  let month  = date.getMonth() + 1
  let day = date.getDate()
  return year + '年' + month + '月' + day
}

let time = timeChange()

module.exports = time