/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */
var maxProduct = function(nums) {
    if (nums.length === 0) {
		return 0
	}
	
	let result = nums[0];

    //两个mDP分别定义为以i结尾的子数组的最大积与最小积；

	let maxDP = Array.from({length: nums.length});
	let minDP = Array.from({length: nums.length});

    // 初始化
    maxDP[0] = nums[0]; minDP[0] = nums[0];

	for (let i = 1; i < nums.length; i++) {

        // 最大积的可能情况有：元素i自己本身，上一个最大积与i元素累乘，上一个最小积与i元素累乘；

		// 与i元素自己进行比较是为了处理i元素之前全都是0的情况；
		maxDP[i] = Math.max(nums[i],maxDP[i-1]*nums[i],minDP[i-1]*nums[i]);

		minDP[i] = Math.min(nums[i],maxDP[i-1]*nums[i],minDP[i-1]*nums[i]);

		result = Math.max(result,maxDP[i])
	}

	return result
};

module.exports = maxProduct