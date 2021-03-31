// 方法一： 归并排序 O(logn)
function sortList(head){

	let len = getLength(head);

	let dummy = new ListNode(-1);

	dummy.next = head;

	for (let i = 1; i < len; i*=2) {
		let pre = dummy;
		let cur = dummy.next; 

		while(cur!==null){
			debugger;
			head1 = cur; // 第一部分头 （第二次循环之后，cur为剩余部分头，不断往后把链表按照步长step分成一块一块...）
			head2 = split(head1,i); // 第二部分头
			
			cur = split(head2,i);

			let temp = merge(head1,head2);
			pre.next = temp;

			while(pre.next){
				pre = pre.next
			}

		}	
	}

	return dummy.next

}

function getLength(head) {
	let count = 0;

	while(head){
		count++;
		head=head.next
	}

	return count
}

function split(head,step) {
    //断链操作 返回第二部分链表头

	if (head==null) {
		return null
	}	

	let cur = head;

	for (let i = 1; i < step && cur.next!==null; i++) {
		cur = cur.next;
	}

	let right = cur.next;

	cur.next = null; //切断连接

	return right

}

function merge(l1,l2) {
	let head = new ListNode(-1);
	let p = head;
	while(l1!=null && l2!=null){
		if(l1.val < l2.val){
			p.next = l1;
			l1 = l1.next
		}else{
			p.next = l2;
			l2=l2.next
		}
		p = p.next
	}
	if(l1!==null){
		p.next = l1
	}
	if(l2!==null){
		p.next = l2
	}

	return head.next

}

//方法二： 系统排序 O(n^2)
// var sortList = function(head) {

// 	if(head==null || head.next===null){
// 		return head;
// 	}

// 	let prevHead = new ListNode(0);

// 	let node = head;

// 	let stack = [];



// 	while(node){

// 		stack.push(node.val);

// 		node = node.next
// 	}


// 	stack.sort((a,b)=>a-b);

// 	let dumyNode = prevHead;

// 	while(stack.length){

// 		const p = stack.shift();

// 		const currentNode = new ListNode(p);

// 		dumyNode.next=currentNode;

// 		dumyNode=currentNode;

// 	}

// 	return prevHead.next
// };