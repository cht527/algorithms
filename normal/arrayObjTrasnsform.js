/*
 *示例一: 'abc' --> {value: 'abc'}
 *示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */


export const arrayObjTransform = (data) => {
    const obj = {}

    let temp = obj;

    const list = data.match(/\w+/g);

    while (list && list.length) {
        const item = list.shift();

        temp.value = item;
        if (list.length) {
            temp.children = {};
            temp = temp.children;
        }
    }

    return obj;
};