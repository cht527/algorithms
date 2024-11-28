/*
 * @Author: Cao Haitao
 */

const nums = [10,9,2,5,3,7,101,18];

var lengthOfLIS = function(nums) {

	let dp=Array.from({length:nums.length},()=>1);

	for (var i = 0; i < nums.length; i++) {
		for (var j = 0; j < i; j++) {
			if (nums[j]<nums[i]) {
				dp[i]=Math.max(dp[i],dp[j]+1)
			}
		}
	}

	return Math.max(...dp)

};

/**
 * @param {number[]} nums
 * @return {number}
 * 定义 dp[i] 表示以 nums[i] 结尾的最长上升子序列的长度，cnt[i] 表示以 nums[i] 结尾的最长上升子序列的个数。
 * 设 nums 的最长上升子序列的长度为 maxLen，那么答案为所有满足 dp[i]=maxLen 的 i 所对应的 cnt[i] 之和。
 */

var findNumberOfLIS = function(nums) {
    let n = nums.length;
    let max = 0;
    let ans = 0;
    const dp = Array.from({length: n},()=>0);
    const cnt = Array.from({length: n},()=>0);

    for(let i=0;i<n;i++){
        dp[i]=1;
        cnt[i]=1;
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                if(dp[j]+1>dp[i]){
                    dp[i] = dp[j]+1;
                    // 重置计数
                    cnt[i] = cnt[j]
                }else if(dp[j]+1===dp[i]){
                    cnt[i]+=cnt[j]
                }
            }
        }
        if(dp[i] > max){
            max = dp[i]
            //重置
            ans = cnt[i]
        } else if(dp[i] === max){
            ans += cnt[i]
        }
    }
    return ans
};