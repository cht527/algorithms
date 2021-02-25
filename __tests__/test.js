/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */


const productExceptSelf = require('../除自身以外的乘数');

test('productExceptSelf',()=> {

    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6])

})