/*
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

示例 2：
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

*/
var longestConsecutive = function(nums) {
    let len = nums.length;
    if(len<=1){
        return len
    }
    let res = 1;
    // 用set去重，判断是否存在
    let nums_set = new Set(nums);

    for(let item of nums_set){
        let curItem = item;
        if(!nums_set.has(curItem-1)){ // 性能优化，如果 当前元素-1 在set中，说明已经遍历过了
            let curLen = 1; // 内层循环，求当前循环的最大长度
            while(nums_set.has(++curItem)){
                curLen++;
            }
            res = Math.max(res,curLen)
        }
    }

    return res

};