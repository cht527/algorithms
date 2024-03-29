/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;

    let left = 0;
    let right = height.length - 1;

    while(left < right){
        const h = Math.min(height[left],height[right]);
        const area = h * (right - left);

        max = Math.max(area, max);

        if(height[left] < height[right]){
            left++
        }else {
            right--
        }
    }

    return max
};


