/**
 * 将 一个扁平的数组即一维数组代表的菜单结构转换成一个多层级的菜单结构。

一位数组中每一个元素必须要包含以下属性：

拥有一个唯一的id
拥有一个parent_id, 这个id指向它父级的id
 */

const menu_list = [{
    id: '1',
    menu_name: '设置',
    parent_id: 0
}, {
    id: '1-1',
    menu_name: '权限设置',
    parent_id: '1'
}, {
    id: '1-1-1',
    menu_name: '用户管理列表',
    parent_id: '1-1'
}, {
    id: '1-1-2',
    menu_name: '用户管理新增',
    parent_id: '1-1'
}, {
    id: '1-1-3',
    menu_name: '角色管理列表',
    parent_id: '1-1'
}, {
    id: '1-2',
    menu_name: '菜单设置',
    parent_id: '1'
}, {
    id: '1-2-1',
    menu_name: '菜单列表',
    parent_id: '1-2'
}, {
    id: '1-2-2',
    menu_name: '菜单添加',
    parent_id: '1-2'
}, {
    id: '2',
    menu_name: '订单',
    parent_id: 0
}, {
    id: '2-1',
    menu_name: '报单审核',
    parent_id: '2'
}, {
    id: '2-2',
    menu_name: '退款管理',
    parent_id: '2'
}];

function flatListToTree(list) {
    const tree = {};
    const temp = {};

    list.forEach(element => {
        temp[element.id] = element
    });

    Object.values(temp).forEach(element => {
        if (element.parent_id) {
            if (!temp[element.parent_id].children) {
                temp[element.parent_id].children = {}
            }
            temp[element.parent_id].children[element.id] = element
        } else {
            tree[element.id] = element
        }
    })

    return tree
}

console.log(JSON.stringify(flatListToTree(menu_list)));