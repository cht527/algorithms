const {gcd, gcdn} = require('../最大公约数-最小公倍数');
const arrn = [9,12,18,24,39];

describe('gcd ',()=> {
    test('gcd 2',()=> {
   
        expect(gcd(12,18)).toBe(6)
    
    });

    test('gcd n',()=> {
   
        expect(gcdn(arrn)).toBe(3)
    
    })

})