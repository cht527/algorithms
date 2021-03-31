/**
给定一个字符串，逐个翻转字符串中的每个单词。

示例：

输入: ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
输出: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

单词的定义是不包含空格的一系列字符
输入字符串中不会包含前置或尾随的空格
单词与单词之间永远是以单个空格隔开的

 */
var reverseWords = function(s) {
    let reverse = (s,i,j) =>{
        while(i<j){
            [s[i],s[j]]=[s[j],s[i]];
            i++;
            j--;
        }
    }

    let len=s.length;

    reverse(s,0,len-1); //整体反转

    let start=0;

    for(let i=0;i<len;i++){
        if(s[i] === ' '){ // 局部反转
            reverse(s,start,i-1);
            start = i+1
        }
    }
    
    // 不要忘记最后一个单词

    reverse(s,start,len-1)

};