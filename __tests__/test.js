/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */



const {removeNthFromEnd, ListNode} = require('../链表/删除链表倒数第n个元素');

test('removeNthFromEnd',()=> {
    let head = new ListNode(0,null);

    let node = head;
   
    let n=5;
   
    while(n){
        node.next = new ListNode(n,null);
        node = node.next;
        n--
    }

    expect(removeNthFromEnd(head.next,2).val).toBe(5)

})