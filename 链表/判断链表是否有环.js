var hasCycle = function(head) {
    // 方法一，hash
    // if(head===null || head.next===null){
    //     return false
    // }

    // let map = new Map();

    // while(head){
    //     if(map.has(head)){
    //         return true
    //     }
    //     map.set(head,true);
    //     head = head.next;
    // }
    // return false

    // 方法二，快慢指针

    // 类似套圈，如果没有环永远不会追上，如果有环，快的一定会追上慢的

    let fast = head;

    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true
        }
    }

    return false
};