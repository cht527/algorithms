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
/**
交换之前的节点关系是 temp -> node1 -> node2，交换之后的节点关系要变成 temp -> node2 -> node1，因此需要进行如下操作。

temp.next = node2
node1.next = node2.next
node2.next = node1

 */
var swapPairs = function(head) {
    let dumNode = new ListNode(0);

    dumNode.next = head;

    let temp = dumNode;

    while (temp.next !== null && temp.next.next !== null) {
        let node1 = temp.next;
        let node2 = temp.next.next;

        temp.next = node2;

        node1.next = node2.next;

        node2.next = node1;

        temp = node1
    }

    return dumNode.next
};