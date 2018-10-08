//--方法一
function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

//--方法二

function fac(n){
  let r=1;
  while(n>1){
    r=r*n--;
  }
  return r
}
