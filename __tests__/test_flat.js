/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */




const {flat,flatCircle} = require('../normal/flat');
const arr = [1, [2, [ [3, 4], 5, []], 6]];
test('flat',()=> {
   
    expect(flatCircle(arr)).toEqual([1, 2, 3, 4, 5, 6])

})