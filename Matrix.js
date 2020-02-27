/*
 * @Author: your name
 * @Date: 2020-02-27 15:32:48
 * @LastEditTime: 2020-02-27 15:32:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/Matrix.js
 */
const produceMatrix = (m,n,isNoRepeat) => {
    const _matrix = [];let tempMax=0;
    for (let i = 0; i < m; i++) {
        const temp=[];
        for(let j=0;j<n;j++){
            temp.push(i+j+tempMax)
        }
        if(isNoRepeat){
         tempMax+=(n-1);
        }
        _matrix.push(temp)
    }
    return _matrix
}