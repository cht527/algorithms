/**
 * 
插入排序是指在待排序的元素中，假设前面n-1(其中n>=2)个数已经是排好顺序的，
现将第n个数插到前面已经排好的序列中，然后找到合适自己的位置，
使得插入第n个数的这个序列也是排好顺序的。按照此法对所有元素进行插入，直到整个序列排为有序的过程
 */
function insertSort(){
    for (let index = 1; index < arr.length; index++) {
        let target = index;
    
        for (let j = index-1; j >= 0; j--) {
            if (arr[target] < arr[j]) {
                [arr[target],arr[j]] = [arr[j],arr[target]];
                target = j
            } else {
                break
            }
            
        }	
    }
    
    return arr
}
/**
 * 快速排序
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function doSort(arr,left,right){
    let mid = arr[Math.floor((left+right)/2)];

    while(left <= right){
        while(arr[left]<mid){
            left++
        }
        while(arr[right]>mid){
            right--
        }

        if(left<=right){
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++
            right--
        }
        
    }

    return left
}

function quickSort(arr,left,right){
   if(arr.length>1){
    const i = doSort(arr,left,right);

    if(left<i-1){
     quickSort(arr,left,i-1)
    }
    if(i<right){
     quickSort(arr,i,right)
    }
   }

   return arr
   
}

function merge(left,right){
    const result = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        }else {
            result.push(right.shift())
        }
    }

    return result.concat(left).concat(right)
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }

    const midIndex= Math.floor(arr.length/2);

    const left = arr.slice(0,midIndex);

    const right = arr.slice(midIndex);

    return merge(mergeSort(left),mergeSort(right))
}
