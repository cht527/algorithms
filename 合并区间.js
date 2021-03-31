/*
合并区间
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
*/

var merge = function(intervals) {
    
  let len = intervals.length;
  if(len<=1){
      return intervals
  }
  let res = [];

  intervals.sort((a,b)=>a[0]-b[0])
  
  res.push(intervals[0])
  // 从原数组的第一个元素进行遍历
  for (var i = 1; i < intervals.length; i++) {
    // 如果当前区间的左端点 大于 merge数组最后一个元素的右端点
    if (intervals[i][0] > res[res.length - 1][1]) {
      // 说明这个数组可以直接放进merge数组中
      res.push(intervals[i])
    } else { // 说明有区间有交集 当前区间的左端点小于等于最后一个元素的右端点
      // 如果当前区间的右端点 大于 merge 最后一个右端点
      if (intervals[i][1] > res[res.length - 1][1]) {
        // 更新右端点为最大值
        res[res.length - 1][1] = intervals[i][1]
      }
      // 其他情况 说明包含在 res范围内，保持res右端点不变
    }
  }

  return res
};

/*
插入区间

给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。


示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
示例 3：

输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]

*/

function insert(intervals,newInterval){
    const res = [];
    let i = 0;
    const len = intervals.length;
  
    while (i < len && intervals[i][1] < newInterval[0]) { // 当前遍历的是newInterval左边的，不重叠的区间
      res.push(intervals[i]);
      i++;
    }
  
    while (i < len && intervals[i][0] <= newInterval[1]) { // 当前遍历是有重叠的区间 求并集
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给区间的左端
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给区间的右端
      i++;
    }
    res.push(newInterval); // 循环结束后，区间为合并后的区间，推入res
  
    while (i < len) {                 // 在右边，没重叠的区间
      res.push(intervals[i]);
      i++;
    }
    
    return res;
}