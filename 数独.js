/*
 * @Author: Cao Haitao
 */

// 判断 数独是否满足以下条件

// 行中没有重复的数字。
// 列中没有重复的数字。
// 3 x 3 的子数独内没有重复的数字。
//	
// | 5	| 3	| .	| .	| 7	| .	| .	| .	| .	|
// --------------------------------------
// | .	| .	| .	| 1	| 9	| 5	| .	| .	| .	|
// --------------------------------------
// | .	| 9	| 8	| .	| .	| .	| .	| 6	| .	|
// --------------------------------------
// |	|	|	|	|	|	|	|	|	|
// --------------------------------------
// |	|	|	|	|	|	|	|	|	|
// --------------------------------------
// |	|	|	|	|	|	|	|	|	|
// --------------------------------------
// |	|	|	|	|	|	|	|	|	|
// |	|	|	|	|	|	|	|	|	|
// --------------------------------------
// |	|	|	|	|	|	|	|	|	|


// 实际上，所有这一切都可以在一次迭代中完成。

// 方法：一次迭代
// 首先，让我们来讨论下面两个问题：

// 如何枚举子数独？
// 可以使用 box_index = Math.floor(row / 3)*3 + Math.floor(columns / 3)，其中 / 是整数除法



function isValidSudoku(board) {
	const rows = [];
	const columns = [];
	const boxes = [];

	for (var i = 0; i < 9; i++) {
		rows[i] = new Map();
		columns[i] = new Map();
		boxes[i]=new Map();
	}

	for (var m = 0; m < 9; m++) {
		for (var n = 0; n < 9; n++) {
			const val = board[m][n];
			
			// 按行号和列号拆分成 9 个 3 x 3 的子数独
			const boxIdx = Math.floor(m/3)*3 + Math.floor(n / 3);


			if(val!=='.'){
				const rowIdxNum = rows[m].get(val);
				rows[m].set(val,rowIdxNum ? rowIdxNum+1 : 1);

				const columnsIdxNum = columns[n].get(val);
				columns[n].set(val,columnsIdxNum ? columnsIdxNum+1 : 1);

				const boxIdxNum = boxes[boxIdx].get(val);
				boxes[boxIdx].set(val,boxIdxNum ? boxIdxNum+1 : 1)

			}

			if(rows[m].get(val)>1 || columns[n].get(val)>1 || boxes[boxIdx].get(val) > 1 ){
				return false
			}
		}
	}
	return true
}

const value = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(value))