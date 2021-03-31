
/*
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

返回同样按升序排列的结果链表。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates1 = function(head) {
    let node = head;

	while(node.next){
		
		if (node.val === node.next.val) {
			node.next = node.next.next;
		}else {
			node = node.next
		}

	}

	return head
};

/*
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

返回同样按升序排列的结果链表。

 */



var deleteDuplicates2 = function(head) {

	if(!head || head.next===null){
        return head
    }

    const dummy = new ListNode(0, head);

    let node = dummy;

    while(node.next && node.next.next){

        if(node.next.val === node.next.next.val){
            let x = node.next.val;

            while(node.next && node.next.val ===x){
                node.next = node.next.next
            }
        }else{
            node=node.next
        }
    }

    return dummy.next

};