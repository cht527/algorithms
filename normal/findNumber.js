
/*
 * 2. 假设有一个升序数组，经过不确定长度的偏移，得到一个新的数组，我们称为循环升序数组。（例：[0,3,4,6,7] 可能变成 [6,7,0,3,4]）。给定一个数字和一个循环升序数组，
 * 判断这个数字是否在这个数组内，在的话返回 true，否则返回 false。要求时间复杂>度 O(logN)
 *
 * 示例 1：
 * 输入：nums = [6,7,0,3,4], target = 0
 * 输出：true
 *
 * 示例 2：
 * 输入：nums = [6,7,0,3,4], target = 2
 * 输出：false
 */