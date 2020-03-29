/*
 * @Author: your name
 * @Date: 2020-03-29 09:23:49
 * @LastEditTime: 2020-03-29 09:23:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/trangle.js
 */
 /*
 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
例如，给定三角形：
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）
*/
var minimumTotal = function(triangle) {
    if(triangle.length){
       var dp=new Array(triangle.length+1).fill([])
       .map(arr=>new Array(triangle.length+1).fill(0));

       for(var i=triangle.length-1;i>=0;i--){
           var tr=triangle[i];
           for(var j=0;j<tr.length;j++){
                dp[i][j]=Math.min(dp[i+1][j],dp[i+1][j+1])+tr[j]                
           }
       }
       return dp[0][0]

    }else{
        return 0
    }
};

minimumTotal([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
])

