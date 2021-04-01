/*

给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
*/




var partition = function(head, x) {

	if (!head || !head.next) {
		return head
	}

	let left = new ListNode(0);
	let leftNode = left;

	let right = new ListNode(0);
	let rightNode = right

	let node = head;

	while(node){
		if(node.val < x){
			leftNode.next = new ListNode(node.val);
			leftNode = leftNode.next
		}else {
			rightNode.next = new ListNode(node.val);
			rightNode = rightNode.next
		}

		node = node.next
	}

	leftNode.next = right.next

	return left.next


};

partition(linkList.head,2)
