// 方法一
function fibonacci(n){
  let cur=1,prev=0;
  if(n==1){
    return cur
  }
  let i=n-1;
  while(i){
    // 更新 当前值和前一个值
    cur+=prev;
    prev=cur-prev;
    i--;
  }
  return cur
}

// 方法二
function fibonacci(n){
  if(n==1||n==2){
    return 1
  }
  return fibonacci(n-1)+fibonacci(n-2)
}

// 尾递归优化
function fibonacciOpt(n, start=1, cur=1){
  if(n<=2){
    return cur
  }

  return fibonacciOpt(n-1,cur,cur+start)
}

