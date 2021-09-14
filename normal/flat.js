function flat(arr){
    if(arr.length ===0){
        return []
    }
    let _arr = [];
    arr.forEach(item => {
        _arr=_arr.concat(Array.isArray(item)? flat(item) : item)
    });

    return _arr
}

function flatCircle(arr){
    if(arr.length ===0){
        return []
    }
    const stack = [...arr];
    let res = [];
    while(stack.length){
        const item = stack.shift();
        if(Array.isArray(item)){
            stack.unshift(...item)
        }else {
            res.push(item)
        }

    }
    return res
}

module.exports={flat,flatCircle}