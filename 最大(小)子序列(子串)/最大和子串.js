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
var maxSubArraySum = function(nums) {
    var sum=0;
    var max=nums[0];
    for(let num of nums){
        if(sum<=0){ // 小于0 对之后的子序列无影响
            sum=num
        }else{      // 大于0 累加
            sum+=num
            
        }
        max=Math.max(max,sum)

    }
    return max
};

// 最大和子序列
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