// 1 == '1'
// ==的实现过程
// 1. 判断两者类型是否相同
//     - 相同： 比大小
//     - 不同： 类型转换
//         - 先判断是否在对比null与undefined
//             - 是： true
//             - 否： 判断两者是否是String 与 Number类型
//                 - 是： 将String转换为Number
//                 - 否： 判断其中一方是否为布尔值
//                     -是： 将Boolean转换为Number
//                     -否： 判断其中一方是否为Object，且另一方为String,Number,Symbol
//                         - 是： 把Object转换为原始类型进行判断


// [] == []       // false
// 引用类型是判断指针是否相同


// [] == ![]      // true
// [] == !true
// [] == flase
// [] == 0
// 0 == 0  true