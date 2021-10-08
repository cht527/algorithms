/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角
问总共有多少条不同的路径？

*/
var uniquePaths = function(m, n) {
    let dp=Array.from({length:m},()=>[]);
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i==0 || j==0){ // 边界，只能 横or竖两种
                dp[i][j]=1
            }else{
                dp[i][j]=dp[i-1][j]+dp[i][j-1] // 从上往下 和 从左往右 之和
            }
        }
    }
    return dp[m-1][n-1]
      
};

/*
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？ , 
obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
obstacleGrid 元素为1的为障碍点
*/

var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid == null || obstacleGrid.length == 0) {
        return 0;
    }
    let m=obstacleGrid.length;
    let n=obstacleGrid[0].length;
    let dp= Array.from({length:m},()=>new Array(n));
    if(obstacleGrid[0][0]===1){
        return 0
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(obstacleGrid[i][j]===1){ // 障碍点
                dp[i][j]=0
            }else{
                if(i===0 && j===0){
                    dp[i][j]=1
                }else if(i===0 && j!==0){ // 第一行
                    dp[i][j]=dp[i][j-1] // 等于左边值
                }else if(i!==0 && j===0){
                    dp[i][j]=dp[i-1][j]
                }else{
                    dp[i][j]=dp[i-1][j]+dp[i][j-1]
                }
            }
            
        }
    }
    return dp[m-1][n-1]
};