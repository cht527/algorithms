
/*
从左至右扫描，当前扫描的数还不确定要不要删，入栈暂存，保留记忆。
123531这样「高位递增」的数，不会想删高位，删了反而变大，会尽量删低位。
432135这样「高位递减」的数，会想干掉高位，直接让高位变小，效果很好。
所以，如果当前遍历的数比栈顶大，符合递增，是满意的，入栈。
如果当前数比栈顶小，立马删掉栈顶的数，不管后面有没有更大的，为什么？
因为栈顶的数在高位，删掉它，小的顶上，高位变小，变小的幅度大于低位变小。

"1432219"  k = 3
bottom[1       ]top		1入
bottom[1 4     ]top		4入
bottom[1 3     ]top	4出	3入
bottom[1 2     ]top	3出	2入
bottom[1 2 2   ]top		2入  
bottom[1 2 1   ]top	2出	1入	出栈满3个，停止出栈
bottom[1 2 1 9 ]top		9入
照这么设计，如果是 "0432219"，0 最后肯定被留在栈中，变成 0219，还得处理。


"0432219"  k = 3
bottom[0       ]top		0入
bottom[0 4     ]top		4入
bottom[0 3     ]top	4出	3入
bottom[0 2     ]top	3出	2入
bottom[0 2 2   ]top		2入  
bottom[0 2 1   ]top	2出	1入	出栈满3个，停止出栈
bottom[0 2 1 9 ]top		9入
能不能直接不让 前导 0 入栈？可以的。
加一个判断：栈为空且当前字符为 "0" 时，不入栈。取反，就是入栈的条件：


if c != '0' || len(stack) != 0 {
	stack = append(stack, c) // 入栈
}
这避免了 0 在栈底垫底。
遍历结束后，如果还没删够 k 个字符，开一个循环继续出栈（删低位）。
最后如果栈变空了，什么也不剩，则返回 "0"。
否则，将栈中剩下的字符，转成字符串返回

*/
var removeKdigits = function(num, k) {
    const len = num.length;
    const stack = [];
    for(let i=0;i<len;i++){
        
        while(k>0 && stack.length && stack[stack.length-1]>num[i]){
        	stack.pop();
        	k--
        }	

        if(num[i]！== '0' || stack.length){
        	stack.push(num[i])
        }
    }

    while(k-- >0){
    	stack.pop();
    }

    return stack.length == 0 ? "0" : stack.join('');
};

console.log(removeKdigits("1432219",3))