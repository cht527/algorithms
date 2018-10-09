
class QueueEle{ 
  //元素节点，有两个属性
  constructor(e,p){
    this.element=e;
    this.priority=p;
  }
}
class Priorityqueue{
  constructor(){
    this.queue=[]
  }
  enqueue(e,p){
    let queueItem=new QueueEle(e,p);
    if(this.isEmpty()){
      this.queue.push(queueItem);
    }else{
      let flag=false;
      for(let i=0,len=this.length();i<len;i++){
        if(queueItem.priority<this.queue[i].priority){ // 假设数值越小优先级越高
          this.queue.splice(i,0,queueItem);
          flag=true; // 已经插队
          break;
        }
      }
      if(!flag){     // 没有插队,放到最后
        this.queue.push(queueItem);
      }
    }
  }
  dequeue(){
    this.queue.shift()
  }
  isEmpty(){
    return this.queue.length==0
  }
  clear(){
    this.queue.length=0
  }
  length(){
    return this.queue.length
  }
  print(){
    console.log(this.queue);
  }

}

var pqueue=new Priorityqueue();
pqueue.enqueue('a',2);
pqueue.enqueue('b',4);
pqueue.enqueue('c',5);
pqueue.enqueue('d',1);
pqueue.enqueue('e',3);
pqueue.print();
