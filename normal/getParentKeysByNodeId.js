const test = [{
    "id": 25,
    "pid": -1,
    "children": [{
        "id": 200,
        "pid": 25,
        "children": [{
            "id": 206,
            "pid": 200,
            "children": [{
                "id": 70,
                "pid": 206,
                "children": [],
            }],
        }],
    }],
}, {
    "id": 71,
    "pid": -1,
    "children": [],
}];


function getParentKeysById(list, id) {
    const map = {};
    const keys = [];

    const scan = (item) => {
        map[item.id] = item;
        if (item.children && item.children.length) {
            item.children.forEach((child) => {
                scan(child)
            })
        }
    }

    const findPathId = (currentId) => {
        keys.unshift(currentId);
        const pid = map[currentId].pid;
        if (map[pid]) {
            findPathId(pid)
        }
    }

    list.forEach(element => {
        scan(element)
    });

    console.log(map);

    findPathId(id);

    return keys
}

console.log(getParentKeysById(test, 206))