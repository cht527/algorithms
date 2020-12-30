/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */

function intersectionOrUnion(arr, type) {
    if (!Array.isArray(arr)) {
        return []
    }

    if (arr.length === 0) {
        return []
    }

    if (arr.length === 1) {
        return arr[1]
    }

    switch(type){
        case 'intersection':
            return arr.reduce((total, next) => total.filter(item => next.includes(item)))
        case 'union':
            return arr.reduce(
                (total, next) => [...new Set(total)].concat(next.filter(item => !total.includes(item)))
            )
        
    }

}

