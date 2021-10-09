/**
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
*/
var setZeroes = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    let rowSet=new Set();
    let colSet=new Set();
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                rowSet.add(i);
                colSet.add(j)
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(rowSet.has(i)||colSet.has(j)){
                matrix[i][j]=0
            }
        }
    }
    return matrix

};