/*
 * @Author: your name
 * @Date: 2020-05-13 11:39:47
 * @LastEditTime: 2020-05-13 11:39:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/combine.js
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
var searchExist=function(board,word,i,j,visited){
	    // 单词中字母全部匹配，说明可以搜索到，返回true
        if (!word.length) {
            return true
        }
        const key=`${i}-${j}`;
        // 越界、之前访问过、单词首字母和当前元素不相同，返回false
        if (i>=board.length||
            i<0||
            j>=board[0].length||
            j<0||
            visited[key]||
            board[i][j]!==word[0]

        ) {
            return false
        }
        visited[key]=true;

        const currentWord=word.slice(1);
        const success=searchExist(board,currentWord,i+1,j,visited)||
        searchExist(board,currentWord,i-1,j,visited)||
        searchExist(board,currentWord,i,j+1,visited)||
        searchExist(board,currentWord,i,j-1,visited);

        // success为false时，就是回溯
        visited[key] = success;
        return success;
}

var exist = function(board, word) {
    const row=board.length;
	const col=board[0].length;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j<col; j++) {
			if (board[i][j]===word[0]) {
				const isExist= searchExist(board,word,i,j,{});

                if(isExist){
                    return true
                }
			}
		}
	}
    return false
};


/*
代码中如果 success 为 false，说明以当前元素为出发点，搜索剩余字母失败。那么应该将visited[key]重置为 false，以方面其他路径使用。

例如对于以下数组，要搜索abbcbd。按照代码里的方向搜索逻辑，会先找到 abbd，然后发现查找失败，此时就要回溯。否则当按照正确方向找来时，visited 中的值是错误的。

a b b
d b c

*/
