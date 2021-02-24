/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */
/**
 * Definition for singly-linked list.

 */

function ListNode(val) {
	    this.val = val;
	    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];

	const stack2 = [];

	while(l1!=null){
		stack1.push(l1.val)
		l1=l1.next
	}

	while(l2!=null){
		stack2.push(l2.val)
		l2=l2.next
	}

	let carry = 0

	let res = null;

	while(stack1.length || stack2.length || carry!==0){

		let a = stack1.length===0 ? 0 : stack1.pop();

		let b = stack2.length===0 ? 0 : stack2.pop();

		let value = a+b+carry;

		carry = Math.floor(value / 10);

		value %= 10;

		let node = new ListNode(value);

		node.next = res; // 完成当前位的相加

		res = node; // 保存当前结果

	}

	return res
};

module.exports=addTwoNumbers;