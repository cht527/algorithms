/**
 * 
 * @param 
峰值元素是指其值严格大于左右相邻值的元素。
给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
你可以假设 nums[-1] = nums[n] = -∞ 。
*/

/**
* 爬山，如果你往下坡方向走，也许可能遇到新的山峰，但是也许是一个一直下降的坡，最后到边界。
* 但是如果你往上坡方向走，就算最后一直上的边界，由于最边界是负无穷，所以就一定能找到山峰，
* 总的一句话，往递增的方向上，二分，一定能找到，往递减的方向只是可能找到，也许没有。
*/

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length -1;

    while(left < right){
        let mid = left + Math.floor((right-left)/2);

        if(nums[mid] < nums[mid+1]){
            left = mid+1
        } else {
            right = mid
        }
    }

    return left
};

// 所有峰值
var findAllPeakElement = function(nums) {
    if(nums.length <= 2){
        return []
    }
    let res = [];
    for(let i= 1; i < nums.length-1;i++){
        if(nums[i]>nums[i-1] && nums[i]>nums[i+1]){
           res.push(i)
        }
    }

    return res
};

