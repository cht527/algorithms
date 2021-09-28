const CH = '零一二三四五六七八九';
const CH_UNIT = '个十百千万亿';

const ZERO_END = /零+$/;
const ZERO_MULTI = /零{2,}/;

const clearZero = function(str) {
    if (str == null) return "";
    return str.replace(ZERO_END, "").replace(ZERO_MULTI, '零');
};


function numberToCn(value) {
    const tranferNumber = (num) => {
        let int = "";
        let _length = num.length;
        //一位整数 
        if (_length == 1) return CH.charAt(+num);
        if (_length <= 4) { //四位及以下
            for (let i = 0, n = _length; n > 0; i++) {
                let _num = +num.charAt(i);
                int += (_length == 2 && i == 0 && _num == 1) ? "" : CH.charAt(_num);
                n--;
                int += (_num && n != 0 ? CH_UNIT.charAt(n) : '');

            }
        } else { //大数递归
            let d = Math.floor(num.length / 4);
            let y = num.length % 4;
            //"兆","京"等单位处理
            while (y == 0 || !CH_UNIT.charAt(3 + d)) {
                y += 4;
                d--;
            }
            let _maxLeft = num.slice(0, y); //最大单位前的数字
            let _other = num.slice(y); //剩余数字

            int = tranferNumber(_maxLeft) + CH_UNIT.charAt(3 + d) +
                (_other.charAt(0) == '0' ? CH.charAt(0) : '') //单位后有0则加零 
                +
                tranferNumber(_other);
        }
        int = clearZero(int); //修整零
        return int;
    };

    const res = tranferNumber(`${value}`); //转换整数

    return res

}

console.log(numberToCn(1090))