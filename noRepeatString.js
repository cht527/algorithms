/*
 * @Author: your name
 * @Date: 2020-05-13 11:39:47
 * @LastEditTime: 2020-05-13 11:39:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/combine.js
 */

/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


*/
var lengthOfLongestSubstring = function(s) {
    var left=0,right=0;
    var res=0;

    var targetMap={};

    while(right<s.length){
        var c=s[right];
        right++;
        
        if(targetMap[c]){
            targetMap[c]++
        }else{
            targetMap[c]=1
        }

        while(targetMap[c]>1){
            var d=s[left];
            left++;
            targetMap[d]--
        }
        res=Math.max(res,right-left)
    }
    return res
};
