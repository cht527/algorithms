
class Node {
	constructor(key, value){
		this.prev = null;
	    this.next = null;
	    this.key = key;
	    this.value = value;
	    this.frequencyCount = 1;
	}
}

class LfuLinkedList{
	constructor(){
		this.head = new Node('head', null);
	    this.tail = new Node('tail', null);

	    this.head.next = this.tail;
	    this.tail.prev = this.head;

	    this.size = 0;
	}
	insertAtHead(node){
		// set current head as new node's next
	    node.next = this.head.next;
	    this.head.next.prev = node;

	    // set current head as new node
	    this.head.next = node;
	    node.prev = this.head;

	    this.size++;
	}
	removeAtTail(node){
		const oldTail = this.tail.prev; // save last node to return back

	    // get reference to node we want to remove
	    const prev = this.tail.prev;

	    // from the node we want to remove - get the prev node, then set THAT node's next to tail
	    prev.prev.next = this.tail;

	    // set prev node of the tail to the node previous to the node we want to remove
	    this.tail.prev = prev.prev;

	    this.size--;
	    return oldTail;
	}
	removeNode(node){
		node.prev.next = node.next;
	    node.next.prev = node.prev;

	    this.size--;
	}
	
}

class LFUCache{
	constructor(capacity){
		this.map = {}; // stores LfuNode
	    this.frequency = {}; // stores LfuLinkedList

	    this.capacity = capacity;

	    this.minFrequency = 0; // keeps track of the lowest frequency linked list
	    this.size = 0;
	}
	set(key,value){
		let node = this.map[key];

	    // if node doesnt exist in keys then add it
	    if (node == undefined) {

	        // create new node and store in keys
	        node = new Node(key, value);
	        this.map[key] = node;

	        // if we have space for node then try to add it to linked list with frequency 1
	        if (this.size !== this.capacity) {

	            // if linked list for frequency 1 doesnt exist then create it
	            if (this.frequency[1] == undefined) 
	                this.frequency[1] = new LfuLinkedList();

	            // add new node and increment size of frequency 1
	            this.frequency[1].insertAtHead(node);
	            this.size++;

	        } else {
	            // else frequency 1 is full and we need to delete a node first so delete tail
	            const oldTail = this.frequency[this.minFrequency].removeAtTail();
	            delete this.map[oldTail.key];

	            // if we deleted frequency 1 then add it back before adding new node
	            if (this.frequency[1] === undefined) 
	                this.frequency[1] = new LfuLinkedList();

	            this.frequency[1].insertAtHead(node);
	        }

	        // we added a new node so minFrequency needs to be reset to 1
	        // aka new node was referenced once
	        this.minFrequency = 1;

	    } else{
	    	// else node exists so we need to get it and move it to the new linked list

	        // save the old frequency of the node and increment (also update data)
	        const oldFrequencyCount = node.frequencyCount;
	        node.value = value;
	        node.freqCount++;

	        // remove node from the linked list
	        this.frequency[oldFreqCount].removeNode(node);

	        // if new list doesnt exist then make it now
	        if (this.frequency[node.frequencyCount] === undefined) 
	            this.frequency[node.frequencyCount] = new LfuLinkedList();

	        // now add node to new linked list with the incremented freqCount
	        this.frequency[node.frequencyCount].insertAtHead(node);

	        // if the node we incremented was in the minFrequency list of all lists
	        // and there's nothing left in the old list then we know the new minFrequency
	        // for any node in any list is in the next freq so increment that now
	        if (
	            oldFrequencyCount === this.minFrequeny
	            && Object.keys(this.frequency[oldFequencyCount]).size === 0
	        ) {
	            this.minFrequency++;

	        }
	    }
	}

	get(key){
			const node = this.map[key];
		    if (node == undefined) return null;

		    const oldFrequencyCount = node.frequencyCount;
		    node.frequencyCount++;

		    // remove node from old frequency list and create new one if next one doesnt exist
		    // before adding the node to the next list at the head
		    this.frequency[oldFrequencyCount].removeNode(node);
		    if (this.frequency[node.frequencyCount] === undefined) 
		        this.frequency[node.frequencyCount] = new LfuLinkedList();

		    this.frequency[node.frequencyCount].insertAtHead(node);

		    // if old frequency list is empty then update minFrequency
		    if (
		        oldFrequencyCount === this.minFrequency
		        && Object.keys(this.frequency[oldFrequencyCount]).length === 0
		    ) {
		        this.minFrequency++;
		    }

		    return node.value;
	}
		
    
}


const myLFU = new LFUCache(5);
myLFU.set(1, 1); // {1: 1}
myLFU.set(2, 2); // {1: 2<->1}
myLFU.set(3, 3); // {1: 3<->2<->1}
myLFU.set(4, 4); // {1: 4<->3<->2<->1}
myLFU.set(5, 5); // {1: 5<->4<->3<->2<->1}
myLFU.get(1); // return 1, {1: 5<->4<->3<->2, 2: 1}
myLFU.get(1); // return 1, {1: 5<->4<->3<->2, 3: 1}
myLFU.get(1); // return 1, {1: 5<->4<->3<->2, 4: 1}
myLFU.set(6, 6); // {1: 6<->5<->4<->3, 4: 1}
myLFU.get(6); // return 6 {1: 5<->4<->3, 4: 1, 2: 6}

console.log(myLFU.map)