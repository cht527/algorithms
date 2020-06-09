/*
 * @Author: your name
 * @Date: 2020-06-08 17:43:02
 * @LastEditTime: 2020-06-09 10:36:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/0-1背包.js
 */ 

// 0-1背包

var weights=[2,1,3];
var values=[4,2,3];
var N=3;
var W=4;
var package=function(){
	var dp=[];
	// 初始化
	for (var i = 0; i < N+1; i++) {
		let temp=[];
		for (var j = 0; j <W+1; j++) {
			temp[j]=0
		}
		dp.push(temp)
	}
	
	// dp[i][w] 表示 前i个物品，当前背包容量为w时的最大价值

	// 思想 - 穷举遍历
	for (var i = 1; i <= N; i++) {
		 for (var w = 1; w <= W; w++) {
		 	if(w-weights[i-1]<0){ // 当前重量比给定值小，不放
		 		dp[i][w]=dp[i-1][w] 
		 	}else{
		 		dp[i][w]=Math.max(dp[i-1][w],dp[i-1][w-weights[i-1]]+values[i-1])
		 						 //第i个不放入     //第i个放入
		 	}

		 }
	}

	return dp[N][W]

}




// 完全背包 --凑硬币的组合数，可重复使用
var amount=5;
var coins=[1,2,5];

var allPackage=function(){
	var dp= Array.from({length:amount+1},()=>0);
	
	dp[0]=1;// 初始状态：凑0元 只有一种

	for (var i = 0; i < coins.length; i++) {
		for (var j = 1; j <=amount; j++) {
			if(j-coins[i]>=0){
				dp[j]=dp[j]+dp[j-coins[i]]
			}
		}
	}
	return dp[amount]
}