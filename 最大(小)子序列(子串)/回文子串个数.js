/**
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 * @param {string} s
 * @return {number}
 * 
 */

/**
 * 解题思路:
 * 枚举每一个可能的回文中心，然后用两个指针分别向左右两边拓展，当两个指针指向的元素相同的时候就拓展，否则停止拓展。
 * 中心可能是1个字符也可能是2个字符，不可能出现3个字符作为中心的情况，因为3个字符作为中心的话，他就是回文了，等于1个字符作为中心的情况
 */

var countSubstrings = function(s) {
    const expand  = (s,l,r)=>{
        let num=0
        while(l>=0 && r<s.length && s[l] === s[r]){
            num++;
            l--;
            r++;
        }
        return num
    }

    let count = 0;
    for(let i=0;i<s.length;i++){
        count += expand(s,i,i) + expand(s,i,i+1)
    }

    return count
};