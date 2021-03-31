/*
 * @Author: your name
 * @Date: 2020-02-27 15:32:48
 * @LastEditTime: 2020-02-27 15:32:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/Matrix.js
 */


var minDistance = function(s1,s2){
    let m=s1.length,n=s2.length;

    // # dp[i][j] 返回 s1[0..i] 和 s2[0..j] 的最小编辑距离
    let dp=Array.from({length:m+1});

    for (let i=0;i<=m;i++) {
        dp[i]=Array.from({length:n+1});
        dp[i][0]=i
    }
    for (let j=0;j<=n;j++) {
        dp[0][j]=j
    }
    console.log(dp)

    for (var i = 1; i <=m; i++) {
        for (var j= 1; j<= n; j++) {
            if(s1[i-1]==s2[j-1]){ // 啥都不做
                dp[i][j]=dp[i-1][j-1]
            }else{
                dp[i][j]=Math.min(
                    dp[i-1][j]+1  // 删除
                    , 
                    dp[i][j-1]+1  // 插入
                    , 
                    dp[i-1][j-1]+1 // 替换
                )
            }
        }
    }

    return dp[m][n]

}

console.log(minDistance('rad','apple'))