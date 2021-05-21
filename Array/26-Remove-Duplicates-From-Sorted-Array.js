/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  let slow = 1
  for (let fast = 1; fast < n; fast++) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
};