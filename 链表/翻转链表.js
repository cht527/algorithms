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


// 递归
var reverseList = function(head) {

	if (head.next===null) {
		return head
	}

	let last  = reverseList(head.next);


	head.next.next = head;

	head.next = null;

	return last
}




// console.log(reverseLinkList(list))


// 从指定区间翻转 left - right
function reverseLinkListPart(head, left, right){

		if (head===null || head.next===null) {
			return head
		}
	
		let node = new ListNode(-1,head);
	
		let n = 1;
	
		let pre = node;
	
		while(n<left){
			pre = pre.next;
			n++;
		}
	
		const delta = right - left;
	
		let count = 0;
	
		/*
			curr：指向待反转区域的第一个节点 left；
			next：永远指向 curr 的下一个节点，循环过程中，curr 变化以后 next 会变化；
			pre：永远指向待反转区域的第一个节点 left 的前一个节点，在循环过程中不变。
		*/
		let cur = pre.next;
	
	
		while(count < delta){
	
			//  看不懂在纸上画一下
			let next = cur.next;  // 记录当前节点的下一个节点
	
			cur.next = next.next; // 当前指向下一个节点
	
			next.next = pre.next; // 
	
			pre.next = next; // 
	
			count++
	
		}
	
		return node.next
}

// console.log(reverseLinkListPart(list))
