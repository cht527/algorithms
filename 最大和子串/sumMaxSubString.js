function maxSubArray(array) {
    let maxSubArrayStartIndex=0;
    let maxSubArrayLength=0;
    let maxSubarraySum =0;
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
let a=[-2,1,-3,4,-1,2,1,-5,4];
