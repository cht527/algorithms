

/*
 * @Author: Cao Haitao
 */

/**
 * 两数之和
 */

 function two(arr,target){
	 let map = new Map();

	 for(let i=0; i< arr.length; i++){
		 if(map.has(target-arr[i])){
			 return [i, map.get(target-arr[i])]
		 }
		 map.set(arr[i],i)
	 }

	 return []

 }

/*
 *给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = target？
 请你找出所有满足条件且不重复的三元组。
 */
function three(arr,target) {
	if(arr.length===0){
		return false
	}

	const res = [];

	arr.sort((a,b)=>a-b); 

	for (var i = 0; i < arr.length; i++) {
		if(i>0 && arr[i]===arr[i-1]){ // 去重
			continue
		}
		let left = i+1;
		let right = arr.length-1;
		while(left<right){
			const sum = arr[i]+arr[left]+arr[right];
			if(sum===target){
				res.push([arr[i],arr[left],arr[right]]);
				while(left<right && arr[left]===arr[left+1]){
					left++
				}
				while(left<right && arr[right]===arr[right-1]){
					right--
				}
				left++;
				right--
			}else if(sum<target){
				left++;
			}else{
				right--;
			}

		}
	}

	return res
}

const testa=[-1, 0, 1, 2, -1, -4];

console.log(three(testa,0))



/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。
*/

function threeSumClosest(nums,target){
	nums.sort((a,b)=>a-b);

	const len = nums.length;

	let result = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < len; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		let left=i+1;
		let right=len-1;
		while(left<right){
			let sum = nums[i] + nums[left] + nums[right];
			if(sum === target){
				return target
			}

			if(Math.abs(sum - target) < Math.abs(result - target)){
				result = sum
			}

			if(sum>target){
					// 下面逻辑用于优化，实际可以直接 right--
				    let _right = right - 1;
                    // 移动到下一个不相等的元素
                    while (left < _right && nums[_right] == nums[right]) {
                        _right--;
                    }
                    right = _right;
			}else{
				// 下面逻辑用于优化，实际可以直接 left++

				let _left = left + 1;
                    // 移动到下一个不相等的元素
                    while (right > _left && nums[_left] == nums[left]) {
                        _left++;
                    }
                    left = _left;
			}
		}
		
	}

	return result
}
