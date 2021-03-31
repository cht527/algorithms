/*
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]

*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd1 = function(head, n) {

	let dumy = new ListNode(0,head);

	let fast = head; // 快指针

	let slow = dumy; // 慢指针

	while(n--){
		fast = fast.next; // 快指针比慢指针多n步，
	}

	while(fast){ // 到尾节点时，慢指针即到要删除的节点
		fast = fast.next;
		slow = slow.next
	}

	slow.next = slow.next.next; // dumy节点在head之前多加一个节点，当前slow即是删除节点的前置节点

	return dumy.next
	
};

function removeNthFromEnd(head,n){
    let dummy = new ListNode(0,head);
	let node = dummy;
	let num=0;
	while(head){
		num++;
		head=head.next;
	}

	let idx = num-n+1; // 要删除节点的位置

	let start=0;

	while(start!==idx-1){ // 找删除节点的上一节点
		node = node.next;
		start++
	}

	node.next = node.next.next;

	return dummy.next
}

module.exports = {
    removeNthFromEnd1,
    ListNode
};


