/*
 * @Author: your name
 * @Date: 2020-05-13 11:39:47
 * @LastEditTime: 2020-05-13 11:39:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/combine.js
 */


let res=[];

var nQueens=function (n) {
    const board= Array.from({length: n}, () => Array.from({length: n},()=> 0))

    var cols=board[0].length;

    var isValid=function(board,row,col){
        var n=board.length;
        // 同列
        for (var i = 0; i < n; i++) {
            if(board[i][col]==='Queen'){
                return false
            }
        }
        // 右上
        for (var i=row-1,j=col+1; i>=0 && j< n; i--,j++) {
            if(board[i][j]==='Queen'){
                return false
            }
        }
        // 左上
        for (var i = row-1,j=col-1; i >=0 && j>=0;i--, j--) {
            if (board[i][j]==='Queen') {
                return false
            }
        }

        return true
    }


    var backTrack=function(board,row){
        if(row===board.length){
            res.push(board.map((item,index)=>item.map((child)=>child)));
            return
        }

        for (var col= 0; col< cols; col++) {
            if (!isValid(board,row,col)) {
                continue
            }

            board[row][col]='Queen';

            backTrack(board,row+1);

            board[row][col]=0
        }


    }

    backTrack(board,0);

    return res

}

