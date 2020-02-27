/*
 * @Author: your name
 * @Date: 2020-02-27 11:25:38
 * @LastEditTime: 2020-02-27 17:01:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithms/LRU.js
 */

 class Node{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

/*
 * Illustration of the design:
 *
 *                                              
     ______                ______            ______            ______            ______
    |       |  next =>    |      | next =>  |      | next =>  |      | next =>  |      |
    | head  |             |  A   |          |  B   |          |  C   |          | tail |
    |______ |  <= prev    |______| <= prev  |______| <= prev  |______| <= prev  |______|
 *
 */
class LRUCache{
    constructor(capcity){
        this.capcity=capcity;
        this.map={};
        this.length=0;
        this.head = new Node('', null);
        this.tail = new Node('', null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    // 当检索节点或添加新节点时，该节点作为最近使用的节点被带到链接列表的开头。删除节点也是如此。

    get(key){
       if(this.map.hasOwnProperty(key)){
           const node=this.map[key];
           this.remove(node);
           this.add(node);
           return node.value
       }else{
           return -1
       }
    }
    // 设置节点时，该keys属性用于在获取该节点时保持检索时间。如果在添加新节点时缓存已满，则将删除距离尾部最远的节点。O(1)
    set(key,value){
       if(this.map.hasOwnProperty(key)){
           this.remove(this.map[key])
       }
       const newNode=new Node(key,value);
       this.add(newNode);
       this.map[key]=newNode;
       //  if we are over capacity then remove oldest node - its at the head

       if(this.length>this.capcity){
           const realHead = this.head.next;
           this.remove(realHead);
           delete this.map[realHead.key];
       }
    }
    // 新节点仅添加到尾部，因此我们只需要删除节点并在尾部实现即可添加。

    remove(node){
       const prev = node.prev;
       const next = node.next;
       prev.next = next;
       next.prev = prev;
       this.length--
    }

    add(node){
       const realTail = this.tail.prev;
       realTail.next = node;
       this.tail.prev = node;
       node.prev = realTail;
       node.next = this.tail;
       this.length++
    }
    
    
}

const myLRU = new LRUCache(5);

myLRU.set(1, 1); // 1
myLRU.set(2, 2); // 1 <-> 2
myLRU.set(3, 3); // 1 <-> 2 <-> 3
myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5

myLRU.get(1); // 2 <-> 3 <-> 4 <-> 5 <-> 1

myLRU.get(2); // 3 <-> 4 <-> 5 <-> 1 <-> 2


myLRU.set(6, 6); // 4 <-> 5 <-> 1 <-> 2 <-> 6

myLRU.set(7, 7); // 5 <-> 1 <-> 2 <-> 6 <-> 7

myLRU.set(8, 8); // 1 <-> 2 <-> 6 <-> 7 <-> 8