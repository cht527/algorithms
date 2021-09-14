const {sortByKey} = require('../normal/sortByKey');
const arr_num = [{
    a:1,
    b:2
},{
    a:4,
    b:-1
},{
    a:3,
    b:0
}];

const asc_num = [{
    a:1,
    b:2
},{
    a:3,
    b:0
},{
    a:4,
    b:-1
}];

const desc_num = [{
    a:4,
    b:-1
},{
    a:3,
    b:0
},{
    a:1,
    b:2
},];





describe('sortByKey',()=>{
    test('asc num',()=> {
   
        expect(sortByKey(arr_num,'a')).toEqual(asc_num)
    
    });
    test('desc num',()=> {
   
        expect(sortByKey(arr_num,'a','desc')).toEqual(desc_num)
    
    });
})

