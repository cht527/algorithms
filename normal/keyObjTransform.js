/**
 * 1、扁平对象 转换成 树 
 */
const testObj = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae',
    'd.e.x': 'dex'
}
function objToTree(entry){
    const obj = {};
    const keyArray = Object.keys(entry).map((keyName) => {
        return keyName.split('.');
    });
    
    keyArray.forEach(keysArr => {
        let currObj = obj;
        for (let i = 0, len = keysArr.length; i < len; i++) {
            const keyItem = keysArr[i];
            if (!currObj[keyItem]) {
                currObj[keyItem] = i !== len - 1 ? {} : entry[keysArr.join('.')];
            }
            currObj = currObj[keyItem];
        }
    });

    return obj
}
console.log(JSON.stringify(objToTree(testObj)));

/**
 * 2, 树转换成扁平对象
 */

const tree = {
    "a":{
        "b":{
            "c":{
                "dd":"abcdd"
            }
        },
        "d":{
            "xx":"adxx"
        },
        "e":"ae"
    },
    "d":{
        "e":{
            "x":"dex"
        }
    }
};

function treeToObj(tree){
    const result = {};
    
    const subTrans=(obj,keyStr='')=>{
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(typeof obj[key] === 'object'){
                    subTrans(obj[key],keyStr+=`${key}.`)
                }else {
                    // const finalKeyLen=keyStr.length;
                    result[`${keyStr}${key}`]=obj[key];
                }
            }
        }
    }

    subTrans(tree);

    return result
}

console.log(treeToObj(tree));

