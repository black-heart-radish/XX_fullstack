





var intersection = function(nums1, nums2) {
    let map = new Map();   // {ley: value}
    let set = new Set();   // 只存一堆不重复的值
    nums2.forEach((item) => {
        map.set(item,true);
    })
    for (let num of nums1) {
        if (map.has(num)) {
            set.add(num);
        }
    }
    return Array.from(set.values())
};