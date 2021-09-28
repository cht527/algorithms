/*
 * @Author: Cao Haitao
 */
/*
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
*/

// 思路与算法

// 设函数 check(i,j,k) 判断以网格的 (i, j) 位置出发，能否搜索到单词 word[k..]，其中 {word}[k..] 表示字符串 word 从第 k 个字符开始的后缀子串。如果能搜索到，则返回 true，反之返回 false。函数 (i, j, k)check(i,j,k) 的执行步骤如下：

// 如果 {board}[i][j] \neq s[k]board[i][j] 
//  =s[k]，当前字符不匹配，直接返回 {false}false。
// 如果当前已经访问到字符串的末尾，且对应字符依然匹配，此时直接返回 {true}true。
// 否则，遍历当前位置的所有相邻位置。如果从某个相邻位置出发，能够搜索到子串 {word}[k+1..]word[k+1..]，则返回 {true}true，否则返回 {false}false。
// 这样，我们对每一个位置 (i,j)(i,j) 都调用函数 {check}(i, j, 0)check(i,j,0) 进行检查：只要有一处返回 {true}true，就说明网格中能够找到相应的单词，否则说明不能找到。

// 为了防止重复遍历相同的位置，需要额外维护一个与 {board}board 等大的 {visited}visited 数组，用于标识每个位置是否被访问过。每次遍历相邻位置时，需要跳过已经被访问的位置。

function wordSearch(board,word){
        const h = board.length,w = board[0].length;
    
        const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    
        const visited = Array.from({length:h},()=>[]);	
    
    
        for (let i = 0; i < h; i++) {
            visited[i]= Array.from({length:w},()=>false)
        }
    
    
        const check = (i,j,s,k) =>{
    
            if (board[i][j] !== s.charAt(k)) {
                return false
            }else if(k===s.length-1){
                return true
            }
    
            visited[i][j]=true;
    
            let result=false;
    
            for(const [dx,dy] of directions){
                let idx = i+dx;
                let jdy = j+dy;
    
                if (idx>=0 && idx < h && jdy >=0 && jdy < w) {
                    if (!visited[idx][jdy]) {
                        const flag = check(idx,jdy,s,k+1);
    
                        if(flag){
                            result = true;
                            break
                        }
                    }
                }
            }
            visited[i][j]=false;
    
            return result
    
        } 
    
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                const flag = check(i,j,word,0);
                if(flag){
                    return true
                }
            }
        }
    
        return false
    }
    

