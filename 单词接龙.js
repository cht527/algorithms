/*
 * @Author: your name
 * @Date: 2020-03-29 23:06:49
 * @LastEditTime: 2020-03-29 23:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/单词接龙.js
 */
/**
 * 
 * 
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: 0

解释: endWord "cog" 不在字典中，所以无法进行转换。

 */

var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.length===0 || wordList.indexOf(endWord)===-1){
        return 0
    }
    const charDiffNum = (str1, str2) => {
        let changes = 0
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) changes += 1
        }
        return changes
    }

    let wordSet = new Set(wordList)    
    let queue = [[beginWord, 1]]
    while (queue.length) {
        let [word, transNumber] = queue.pop()  
        if (word === endWord) return transNumber
        for (let str of wordSet) {
            if (charDiffNum(word, str) === 1) {
                queue.unshift([str, transNumber+1])  
                wordSet.delete(str)
            }
        }
    }
    return 0

};