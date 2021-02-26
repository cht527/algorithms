/*
 * @Author: Cao Haitao
 */
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 直接相乘会溢出，转换成字符串，

// m、n 分别是 num1 和 num2 的长度，则 num1*num2 长度 是 m+n \ m+n-1

// 证明：

// step1：  num1 和 num2 最小值： 10^(m-1) \ 10^(n-1), 乘积是 10^(m+n-2)，长度为m+n-1
// step2:  num1 和 num2  最大值： 10^m -1  \ 10^n-1, 乘积是 10^(m+n) - 10^m - 10^n +1，很显然
// 10^(m+n) - 10^m - 10^n +1 < 10^(m+n) 长度为m+n

// 创建长度m+n 的数组存储每一位乘积，从低位进位计算，若结果第一位是0 ，结果m+n-1位，把第一位删掉，转成字符串

var multiply = function(num1, num2) {
    if (num1==='0' || num2==='0') {
		return '0'
	}

    let m=num1.length;
    let n=num2.length;

    let res = Array.from({length:m+n},()=>0);

    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            res[i+j+1] += num1[i]*num2[j]
        }
    }

    for(let i=m+n-1;i>0;i--){
        res[i-1] += Math.floor(res[i]/10);
        res[i] %= 10;
    }

    return res[0]==0 ? res.slice(1).join('') : res.join('')
};