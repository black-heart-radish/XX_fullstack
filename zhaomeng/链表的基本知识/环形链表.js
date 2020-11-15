var hasCycle = function (head) {
    let current = head,
        map = new Map();
    while (current) {
        // 如果有环
        if (map.has(current)) {
            return true;
        }
        map.set(current, true)
        current = current.next;
    }
    return false;
};

// 还可以用快慢链表，一个指两，一个指一个