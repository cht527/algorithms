// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 
/*
示例 1：
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
示例 2：

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
*/

/*

用有向图描述依赖关系
示例：n = 6，先决条件表：[[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]
课 0, 1, 2 没有先修课，可以直接选。其余的课，都有两门先修课。
我们用有向图来展现这种依赖关系（做事情的先后关系）

 0 - -> 3   
      /   \ 
    /       5
   /      /
 1  -> 4
      /
     /
   2


这种叫 有向无环图，把一个 有向无环图 转成 线性的排序 就叫 拓扑排序。
有向图有 入度 和 出度 的概念：
如果存在一条有向边 A --> B，则这条边给 A 增加了 1 个出度，给 B 增加了 1 个入度。
所以，顶点 0、1、2 的入度为 0。顶点 3、4、5 的入度为 2。

每次只能选你能上的课
每次只能选入度为 0 的课，因为它不依赖别的课，是当下你能上的课。
假设选了 0，课 3 的先修课少了一门，入度由 2 变 1。
接着选 1，导致课 3 的入度变 0，课 4 的入度由 2 变 1。
接着选 2，导致课 4 的入度变 0。
现在，课 3 和课 4 的入度为 0。继续选入度为 0 的课……直到选不到入度为 0 的课。

这很像 BFS
让入度为 0 的课入列，它们是能直接选的课。
然后逐个出列，出列代表着课被选，需要减小相关课的入度。
如果相关课的入度新变为 0，安排它入列、再出列……直到没有入度为 0 的课可入列。

BFS 前的准备工作
每门课的入度需要被记录，我们关心入度值的变化。
课程之间的依赖关系也要被记录，我们关心选当前课会减小哪些课的入度。
因此我们需要选择合适的数据结构，去存这些数据：
入度数组：课号 0 到 n - 1 作为索引，通过遍历先决条件表求出对应的初始入度。
邻接表：用哈希表记录依赖关系（也可以用二维矩阵，但有点大）
key：课号
value：依赖这门课的后续课（数组）


怎么判断能否修完所有课？
BFS 结束时，如果仍有课的入度不为 0，无法被选，完成不了所有课。否则，能找到一种顺序把所有课上完。
或者：用一个变量 count 记录入列的顶点个数，最后判断 count 是否等于总课程数。

*/


const canFinish = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0); // 入度数组
  const map = {};                                 // 邻接表： 课号-依赖它的后续课数组
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;              // 重要 -> 求课的初始入度值 
    if (map[prerequisites[i][1]]) {               // 当前课已经存在于邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
    } else {                                      // 当前课不存在于邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]]; // 添加依赖它的后续课数组
    }
  }
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) { // 所有入度为0的课入列
    if (inDegree[i] == 0) queue.push(i);
  }
  let count = 0;
  while (queue.length) {
    const selected = queue.shift();           // 当前选的课，出列
    count++;                                  // 选课数+1
    const toEnQueue = map[selected];          // 获取这门课对应的后续课
    if (toEnQueue && toEnQueue.length) {      // 确实有后续课
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;             // 依赖它的后续课的入度-1
        if (inDegree[toEnQueue[i]] == 0) {    // 如果因此减为0，入列
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count == numCourses; // 选了的课等于总课数，true，否则false
};