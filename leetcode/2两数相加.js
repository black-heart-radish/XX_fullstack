// 题目

// 给出两个非空的链表用来表示两个非负的整数。
// 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 解题思路
// 首先创建一个新的链表dummy，且给它创造一个指针指向当前节点的cuur
// 加之前得判断两链表对应相加节点是否为空，也就是是不是一样长的链表
// 用sum变量存贮对应节点相加的和
// 对应节点相加可能会进位，创建变量carry存贮进位，不进位就是0，进位就是Math.floor(sum / 10)
// 新链表各节点的值为对应节点的sum % 10
// 最后还应判断一下carry,康康有没有进位

var addTwoNumbers = function(l1, l2) {
    // 新建链表dummy
    let dummy = new ListNode();
    // 新建当前指针curr
    let curr = dummy;
    // 创建carry用于执行进位操作
    let carry = 0;

    // 如果l1,l2有一个不为空则遍历
    while (l1 !== null || l2 !== null) {
        // 创建sum初始值为0用于存贮每个节点的和
        let sum = 0;
        // 如果l1的节点不为空，就把.val值加入sum，再指向下一节点
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        // l2同l1
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        // sum的最后值还要加上进位的carry
        sum += carry;
        // 新建节点保存信息，值为sum % 10
        curr.next = new ListNode(sum % 10);
        // carry的进位信息为Math.floor(sum / 10)，也就是向下取整
        carry = Math.floor(sum / 10);
        // curr指向下一节点
        curr = curr.next;
    }

    // 当l1,l2的节点遍历完之后，判断一下carry是否进位，进位则存贮
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    // 返回链表dummy
    return dummy.next;
};