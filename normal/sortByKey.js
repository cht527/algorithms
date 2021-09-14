const REG_EXP = {
   Number: /\d+/,
   En: /[a-zA-Z]+/,
   Cn: /[\u4e00-\u9fa5]+/, // /\p{Unifed_Ideograph}/u,,/u 表示按unicode(utf-8)匹配（主要针对多字节比如汉字）
};


/**
 *
排序顺序：数字 —> 英文 —> 中文 —> 特殊字符 —> 其它
数字：从小到大
英文：按字母顺序
中文：按拼音的字母顺序
 */
function sortByKey(arr, key, type = 'asc') {
  if (arr.length <= 1) {
    return arr;
  }

  let arr_copy = arr.slice();

  const arr_sort = arr_copy.sort((a, b) => {
    let res = type === 'asc' ? a[key] - b[key] : b[key] - a[key];
    if (isNaN(res)) {
      res =
        type === 'asc' ?
            String(a[key]).localeCompare(String(b[key]),'zh') :
            String(b[key]).localeCompare(String(a[key]),'zh');
    }
    return res;
  });
  // 以上arr_sort 可实现如下排序：["", "&", "%", null, 30, 100, 200, "澳门", "汉字", "中文", "Admin", "Lisa", undefined]
  // 至少除了特殊字符，中英文和数字都是合理的排序

  // 极致处理：可以自定义规则 
  const arr_group = {
    'number': [],
    'en': [],
    'cn': [],
    'other': []
  };

  arr_sort.forEach(item=> {
    if(REG_EXP.Number.test(item[key])){
        arr_group['number'].push(item);
    }else if(REG_EXP.En.test(item[key])){
        arr_group['en'].push(item);
    }else if(REG_EXP.Cn.test(item[key])){
        arr_group['cn'].push(item);
    }else {
        arr_group['other'].push(item)
    }
  });

  return arr_group['number'].concat(arr_group['en']).concat(arr_group['cn']).concat(arr_group['other'])

}

module.exports = {
  sortByKey
};
