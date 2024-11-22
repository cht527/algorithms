//--方法一
function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

// 尾递归优化

function factorialRecursiveOpt(number, total=1) {
  if(number === 1){
    return total
  }

  return factorialRecursiveOpt(number-1, number * total)
}

//--方法二

function fac(n){
  let r=1;
  while(n>1){
    r=r*n--;
  }
  return r
}
