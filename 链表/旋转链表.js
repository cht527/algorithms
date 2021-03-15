/*
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

*/
var rotateRight = function(head, k) {

    if (head === null) {
        return null
    }

    if (head.next === null) {
        return head
    }

    let old_tail = head;

    let n=1;
    while(old_tail.next!==null){
        old_tail = old_tail.next;
        n++;
    }

    old_tail.next = head; // 找到尾部，连接头部形成环；

    // k = 2

    // 1 -> 2 -> 3 -> 4 -> null

    // 1 -> 2 -> 3 -> 4 
    // ^              |
    // |______________|


    // 3 -> 4 -> 1 -> 2 -> null

    const step = k % n;

    let new_tail = head; // 新的尾部是2 ，n - step - 1;

    for (let i = 0; i < n-step-1 ; i++) {
        new_tail = new_tail.next;
    }

    const new_head = new_tail.next;

    new_tail.next = null; // 断开

    return new_head



};