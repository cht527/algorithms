/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */


// 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

// 说明: 

// 如果题目有解，该答案即为唯一答案。
// 输入数组均为非空数组，且长度相同。
// 输入数组中的元素均为非负数

const gas1  = [1,2,3,4,5];
const cost1= [3,4,5,1,2];


const gas2  = [2,3,4]
const cost2 = [3,4,3]

function canCompleteCircuit(gas,cost) {

	const len = gas.length;

	for (var i = 0; i < len; i++) { // 遍历判断各个站点i

		let j=i; 

		let _len = len; // 环行一圈需要的次数等于站点个数

		let delta = 0;  // 剩余油量
		
		while(_len){ 

			delta += (gas[j]-cost[j]);

			if(delta<0){  // 当前油量小于0表示无法完成本站，直接跳过
				break
			}
 
			if(j===len-1){ // 遍历最后仍没有完成一圈，需要从头开始
				j=0
			}else{         
				j++
			}

			_len--
		}

		if(delta>=0){  // 完成一圈后剩余油量大于等于0 表示可以完成
			return i
		}
		
	}

	return -1
}

console.log(canCompleteCircuit(gas1, cost1))