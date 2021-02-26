/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */

 /*

 假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。

请找出其中最小的元素。
 */

// 二分查找临界点
// 4,5,6,7,0,1,2

var findMin = function(nums) {
    if (nums.length == 1) {
      return nums[0];
    }
    let len = nums.length;
    if(nums[0]<nums[len-1]){ // 已经有序
        return nums[0]
    }
    let left = 0;
    let right = len-1;

    while(left<=right){

        let mid = left + Math.floor((right-left)/2);

        if(nums[mid]<nums[mid-1]){
            return nums[mid]
        }

        if(nums[mid]>nums[mid+1]){
            return nums[mid+1]
        }

        if(nums[mid]>nums[0]){ // 往右找
            left = mid+1
        }else{ // 往左找
            right = mid-1
        }

    }
    return -1
};