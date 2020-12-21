/*
 * @Author: Cao Haitao
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function addTwoNumbers(l1,l2){
   let head = null;
   let tail = null;

   let carry = 0;

   while(l1 != null || l2 !== null){
       let l1Val = l1 != null ? l1.val : 0;
       let l2Val = l2 != null ? l2.val : 0;
       let sumVal = l1Val + l2Val + carry;


       if(head===null){
           head = tail = new ListNode(sumVal % 10);
       }else{
           tail.next = new ListNode(sumVal % 10);
           tail = tail.next
       }

       carry = Math.floor(sumVal / 10);

       if(l1 !== null){
           l1 = l1.next;
       }

       if(l2 !== null){
           l2 = l2.next;
       }

   }  

   if(carry>0){
       tail.next = new ListNode(carry)
   }

   return head
}

