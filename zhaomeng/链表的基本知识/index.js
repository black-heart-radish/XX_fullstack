// 数组  存储是连续的空间
let arr = [1, 2, 3];
// 链表  存储是非连续空间
// 1  ->  2  ->  3
let node1 = {val: 1, next: null};
let node2 = {val: 2, next: null};
let node3 = {val: 3, next: null};
node1.next = node2;
node2.next = node3;
// console.log(node1);


let current = node1;
while (current) {
    console.log(current);
    current = current.next;
}