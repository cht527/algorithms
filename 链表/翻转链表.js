/*
 * @Author: Cao Haitao
 */
function reverseLinkList(l){

	let cur = l;

	let pre = null;

	while(cur){

		let temp = cur.next; // 记录当前节点的下一个节点

		cur.next = pre; // 当前指向前一个节点

		pre = cur; // 指针后移一位 

		cur = temp; // 处理下一个节点

	}

	return pre

}