const data = require('./data.json');
function recurseDLR(root){
    const result = [];
    const doDLR = (tree) => {
        if(tree){
            result.push(tree.value)
            doDLR(tree.left);
            doDLR(tree.right);
        }
    }
    doDLR(root)
    return result
}   

function circelDLR(root){
    const result = [];
    const stack = [];
    let parent = root;

    while(parent || stack.length){
        if(parent){
            result.push(parent.value);
            stack.push(parent);
            parent = parent.left
        }else{
            const node = stack.pop();
            parent = node.right
        }
    }
    return result
}


function circelLDR(root){
    const result = [];
    const stack = [];
    let parent = root;

    while(parent || stack.length){
        if(parent){
            stack.push(parent);
            parent = parent.left
        }else{
            const node = stack.pop();
            result.push(node.value); 
            parent = node.right
        }
    }
    return result
}

function circelLRD(root){
    const result = [];
    const stack = [];
    let parent = root;

    while(parent || stack.length){
        if(parent){
            stack.push(parent);
            result.unshift(parent.value); 
            parent = parent.right
        }else{
            const node = stack.pop();
            parent = node.left
        }
    }
    return result
}


// 层级遍历

function bfs(root) {
    const queue = [root];
    const result = [];

    while(queue.length){
        const node = queue.shift();
        result.push(node.value);
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }

    return result
}


const grid =[
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
  

var numIslands = function(grid) {
    const row = grid.length;
    if(row <= 0){
        return 0
    }
 
    let num_islands = 0;
 
    const col = grid[0].length;
 
    const dfs = function(grid,r,c){
     
         if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] == '0') {
             return;
         }
 
         grid[r][c] = '0';
         dfs(grid, r - 1, c);
         dfs(grid, r + 1, c);
         dfs(grid, r, c - 1);
         dfs(grid, r, c + 1);
    }
 
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(grid[i][j]==='1'){
                 num_islands++;
                 dfs(grid,i,j)
            }
            
        }
    }
 
    return num_islands
 
 };

console.log(numIslands(grid));
