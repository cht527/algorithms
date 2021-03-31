/*
给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:

给定链表 1->2->3->4, 重新排列为 1->4->2->3.
示例 2:

给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
*/
var reorderList = function(head) {
    let list = []; //将节点存储到数组
    let node = head;
    while(node){
        list.push(node);
        node=node.next
    };

    let i=1;
    let j=list.length-1;

    while(i<=j){ // 双指针，先加右边，再加左边
        head.next = list[j];
        j--;
        head=head.next;

        head.next=list[i];
        i++
        head=head.next
    }
    head.next=null
};