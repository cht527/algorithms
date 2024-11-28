/*
 * @Author: Cao Haitao
 */
/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/

// 方法一：动态规划求和
var maxSubArraySum = function(nums) {
    const maxDP = [nums[0]];

    for(let i=1;i<nums.length;i++){
        // 需要连续
        maxDP[i] = Math.max(nums[i], maxDP[i-1] + nums[i])
        
    }

    return Math.max(...maxDP)
};

// 方法二：可以先最大和子序列，然后求和即可
function maxSubArray(array) {
    let maxSubArrayStartIndex=0;
    let maxSubArrayLength=0;
    let maxSubarraySum = Number.MIN_VALUE;
    for (var i = 0; i < array.length; i++) {
        let subArraySum=0;
        for (var j = 1;j<=array.length-i; j++) {
            subArraySum+=array[i+j-1];
            if(subArraySum>maxSubarraySum){
                maxSubArrayLength=j;
                maxSubArrayStartIndex=i;
                maxSubarraySum=subArraySum;
            }
        }
    }
    return array.slice(maxSubArrayStartIndex,maxSubArrayStartIndex+maxSubArrayLength)
}