var subarraySum = function(nums, k) {
    let count = 0;
    const len = nums.length;
    let map = new Map();

    let pre = 0;

    map.set(0, 1);
    // 对于一开始的情况，下标 0 之前没有元素，可以认为前缀和为 0，个数为 1 个
    // eg: nums = [3,4,7,6] , k=7 , 遍历到4，pre=4+3，pre-7=0，此时count应该为1

    for (let i = 0; i < len; i++) {
        pre += nums[i];

        // 如果 map 中存在 key 为「当前前缀和 - k」，说明这个之前出现的前缀和，满足「当前前缀和 - 该前缀和 == k」，它出现的次数，累加给 count。

        if (map.has(pre - k)) {
            count += map.get(pre - k)
        }

        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1)
        } else {
            map.set(pre, 1)
        }

    }

    return count
}