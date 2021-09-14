// 定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数
// gcd(a,b) = gcd(b,a mod b) (不妨设a>b 且r=a mod b ,r不为0)

/**
a可以表示成a = kb + r（a，b，k，r皆为正整数，且r
假设d是a,b的一个公约数，记作d|a,d|b，即a和b都可以被d整除。
而r = a - kb，两边同时除以d，r/d=a/d-kb/d，由等式右边可知m=r/d为整数，因此d|r
因此d也是b,a mod b的公约数。
因(a,b)和(b,a mod b)的公约数相等，则其最大公约数也相等，得证。
 */

function gcd(a, b) {
  let r = a % b;
  if (r === 0) {
    return b;
  }
  return gcd(b, r);
}

function gcdn(arr) {
    const length = arr.length;
    if(length<=1){
        return arr[0]
    }
    const _gdcn = (arr,len) => {
        if(len === 1){
            return arr[0]
        }

        return gcd(arr[len-1], _gdcn(arr, len-1))

    }

    return _gdcn(arr,length)
}

/**
 * a*b / gcd(a,b)
 */
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

module.exports = {
  gcd,
  lcm,
  gcdn
};
