/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */
import { LinkedList, Node } from './linkList'
function reverseLinkList(l){

	let head = l.head;

	if (head===null || head.next===null) {
		return l
	}

	let cur = head;

	let pre = null;


	while(cur){

		let temp = cur.next; // 记录当前节点的下一个节点

		cur.next = pre; // 当前指向前一个节点

		pre = cur; // 指针后移一位 

		cur = temp; // 处理下一个节点

	}

	return pre
}

const head = new Node(-1);

const list = new LinkedList(head);

for (var i = 0; i < 4; i++) {
	list.append(new Node(i))
}


console.log(reverseLinkList(list))