/*
 * @Author: Cao Haitao
 */
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