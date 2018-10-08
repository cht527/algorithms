// 方法一
 function fibonacci(n){
  let arr=[1];
  let cur=1,prev=0;
  if(n==1){
    return arr
  }
  while(n-1){
    cur+=prev;
    prev=cur-prev;
    arr.push(cur);
    n--;
  }
  return arr

}

