// function generateCapitalStringWithHashTag (str) {
//     // 1. 是否为空   :  .length == 0   ,  null   ,   ""   ,   !
//     // 2. 是否超过140字  :  .length
//     // 3. #   :  # +
//     // 4. 每个单词都大写   :

//     return str.length == 0 || str.length >= 140 ? false : '#' + str.split(' ').map(function(word) {
//         console.log(word);
//         return word.charAt(0).toUpperCase() + word.slice(1)
//         // return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
//         // return word.toUpperCase()
//     }).join(' ')  // map es6里面数组的新方法，遍历数组的每一项并用一个函数处理，返回新的数组

// //     if (str.length == 0 || str.length >= 140)
// //         return false
// //     return '#' + str.split(' ').map(function(word) {
// //         console.log(word);
// //         return word.charAt(0).toUpperCase() + word.slice(1)
// //         // return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
// //         // return word.toUpperCase()
// //     }).join(' ')  // map es6里面数组的新方法，遍历数组的每一项并用一个函数处理，返回新的数组
// }


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function generateCapitalStringWithHashTag(str) {
    return str.length > 140 || str === '' ? false : '#' + str.split(' ').map(capitalize).join(' ')
    
}

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function generateCapitalStringWithHashTag(str) {
//     return str.length == 0 || str.length > 140 ? false : '#' + str.split(' ').map(capitalize).join(' ')
// }

console.log(generateCapitalStringWithHashTag('hello word'));