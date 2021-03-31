
/*
countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221

输入：n = 4
输出："1211"
解释：
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"

*/
// 方法一 递归
function countAndSay_recur(n) {
    if (n===1) return "1";
    else {
        let str =  countAndSay(n-1);
        let temp = str[0];
        let count = 0;
        let ans = '';
        for (let i=0; i<str.length;i++){
            if (str[i]===temp) count++;
            else {
                ans += `${count}${temp}`;
                temp = str[i];
                count = 1;
            }
            if (i===str.length-1) ans += `${count}${temp}`;
        }
        return ans
    }
};

// 方法二 循环

function countAndSay_circle(n) {

	let res = '1';

	for (let i = 1; i<n; i++) {

		let temp = '';

		let start = 0;

		for (let j = 1; j < res.length; j++) {
			if (res[j] !== res[start]) {
				temp += `${j-start}${res[start]}`;
				start = j;
			}
		}

		temp += `${res.length - start}${res[start]}`

		res = temp

	}

	return res
	
}
