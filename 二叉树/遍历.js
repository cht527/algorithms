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


console.log(bfs(data));
