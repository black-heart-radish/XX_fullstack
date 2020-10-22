// 题目

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true

// 示例 2:
// 输入: "()[]{}"
// 输出: true

// 示例 3:
// 输入: "(]"
// 输出: false

// 示例 4:
// 输入: "([)]"
// 输出: false

// 示例 5:
// 输入: "{[]}"
// 输出: true

// 解题思路:------------------------------------------------------------------------
// 这里我们使用栈。

// 遍历输入字符串
// 如果当前字符为左半边括号时，则将其压入栈中
// 如果遇到右半边括号时，分类讨论：
// 1）如栈不为空且为对应的左半边括号，则取出栈顶元素，继续循环
// 2）若此时栈为空，则直接返回false
// 3）若不为对应的左半边括号，反之返回false

// 解法一

// var isValid = function (s) {
//     var left = [];
//     for (var i = 0, j = 0; i < s.length; i++) {
//         if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
//             left[j++] = s[i];
//         } else if (s[i] == '}') {
//             if (left[j - 1] == '{') {
//                 j--;
//             } else {
//                 return false;
//             }
//         } else if (s[i] == ']') {
//             if (left[j - 1] == "[") {
//                 j--;
//             } else {
//                 return false;
//             }
//         } else if (s[i] == ')') {
//             if (left[j - 1] == '(') {
//                 j--;
//             } else {
//                 return false;
//             }
//         }
//     }
//     if (j == 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// 解二  思路是一样的，解二没一的效果好
var isValid = function (s) {
    var left = [];
    var match = undefined;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
            left.push(s[i]);
        } else if (s[i] == '}' || s[i] == ']' || s[i] == ')') {
            switch (s[i]) {
                case '}': match = '{'; break;
                case ']': match = '['; break;
                case ')': match = '('; break;
            }
            if (left.slice(-1) == match) {
                left.pop();
            } else {
                return false;
            }
        }
    }
    if (left.length == 0) {
        return true;
    } else {
        return false;
    }
}

var s = 'sjd{}[[])s'
console.log(isValid(s));