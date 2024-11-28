/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(node){
        this.head = node;
        this.length = 1
    }

    get isEmpty() {
        return this.length === 0
    }

    findAsIndex(index){
        if(index>this.length){
            return null
        } 
        if(index===0){
            return this.head
        }

        let currentNode = this.head;

        while(index && currentNode) {
            index--;

            currentNode = currentNode.next;
        }

        return currentNode

    }

    append(node){
        const lastNode = this.findAsIndex(this.length-1);
        lastNode.next = node;
        this.length++;
    }

    insert(index, node){
        const targetNode = this.findAsIndex(index-1);
        node.next = targetNode.next;
        targetNode.next = node;
        this.length++
    }
    
    remove(index){
        const prevNode = this.findAsIndex(index-1);
        const nextNode = this.findAsIndex(index+1);
        prevNode.next = nextNode
        this.length--
    }
}

module.exports = { LinkedList , Node}

