
/*
 * 2. 假设有一个升序数组，经过不确定长度的偏移，得到一个新的数组，我们称为循环升序数组。（例：[0,3,4,6,7] 可能变成 [6,7,0,3,4]）。给定一个数字和一个循环升序数组，
 * 判断这个数字是否在这个数组内，在的话返回 true，否则返回 false。要求时间复杂>度 O(logN)
 *
 * 示例 1：
 * 输入：nums = [6,7,0,3,4], target = 0
 * 输出：true
 *
 * 示例 2：
 * 输入：nums = [6,7,0,3,4], target = 2
 * 输出：false
 */

// 1、常规二分
 function  binarySearch(nums,target){
    if(arr.length===0){
        return false
    }
    if(arr.length===1){
        return arr[0] === target 
    }
    let start = 0;
    let end = nums.length;

    while(start <= end){ // 有等于号才能完成最后一次比较
        let mid = Math.floor(start + (end - start) / 2); // 避免数据过大溢出
        if(arr[mid] === target){
            return true
        }
        if(arr[mid] < target){
            start = mid+1
        }
        if(arr[mid] < target){
            end = mid-1
        }
    }

    return false
 }

 // 2、 循环数组二分
 // 旋转点: 数组中最小元素
 // [4,5,6,1,2,3]
 function circleSearch(nums,target){
    if(arr.length===0){
        return false
    }
    if(arr.length===1){
        return arr[0] === target 
    }
    let start = 0;
    let end = nums.length;
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2); // 避免数据过大溢出
        if(arr[mid] === target){
            return true
        } else if(arr[start]<=arr[mid]){ // 旋转点在mid 右侧;1.中位数以及它左侧的元素，全部是升序的。2.最左侧元素，必定小于等于中位数。
            if(arr[start]<=target && target<arr[mid]){
                end = mid-1
            }else {
                start = mid+1
            }
        } else { // 旋转点在mid 左侧,1.中位数以及它右侧的元素，全部是升序的。2.最左侧元素，必定大于中位数。
            if(arr[mid] < target && target<=arr[end]){
                start=mid+1
            }else {
                end=mid-1
            }
        }
    }
 }

 module.exports={
    binarySearch,
    circleSearch
 }