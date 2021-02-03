/*
 * @Author: Cao Haitao
 */

const nums = [10,9,2,5,3,7,101,18];

var lengthOfLIS = function(nums) {

	let dp=Array.from({length:nums.length},()=>1);

	for (var i = 0; i < Things.length; i++) {
		for (var j = 0; j < i; j++) {
			if (nums[j]<nums[i]) {
				dp[i]=Math.max(dp[i],dp[j]+1)
			}
		}
	}

	return Math.max(...dp)

};