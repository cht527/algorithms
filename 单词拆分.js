/*
 * @Author: Cao Haitao
 */
/*
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
 */


 function wordBreak(s,wordDict){
    // dp[i] 表示 s[0...i-1] 子串能被空格拆分成若干个字典中出现的单词
    // 分割点 j，dp[i] = dp[j] && wordDict.includes(s[j+1...i-1])
    
    const dp = new Array(s.length+1).fill(false);

    dp[0]=true; // 空串可以被表示

    for(let i=1;i<=s.length;i++){
        for(let j=0;j<s.length;j++){
            if(dp[j] && wordDict.includes(s.slice(j,i))){
                dp[i]=true;
                break; // i长度的子串已经可以拆成单词了，不需要j继续划分子串了
            }
        }
    }

    return dp[s.length]

 }