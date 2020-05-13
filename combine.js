/*
 * @Author: your name
 * @Date: 2020-05-13 11:39:47
 * @LastEditTime: 2020-05-13 11:39:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/combine.js
 */

 // 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 输入: n = 4, k = 2 输出:
// [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4]]

var combine = function(n,k) {
	var res=[];
	var currentRes=[];
    if(n<k){ return [] }

    var combineSub=function (start,currentRes) {
    	if(currentRes.length===k){
    		res.push(currentRes.slice(0))
    		return
	    }else{
	    	for(var i=start;i<=n;i++){
	    		currentRes.push(i);
	    		combineSub(i+1,currentRes);
	    		currentRes.pop()
	    	}
	    }
    }
    combineSub(0,currentRes);

    return res
};

