// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
//  var minPathSum = function(grid) {
//   let row = grid.length, col = grid[0].length
//   for (let i = 1; i < row; i++) { // 初始化第 0 列
//     grid[i][0] += grid[i - 1][0]
//   }
  
//   for (let i = 1; i < col; i++) { // 初始化第 0 行
//     grid[0][j] += grid[0][j - 1]
//   }

//   for (let i = 1; i < row; i++) {
//     for (let j = 1; j < col; j++) {
//       grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
//     }
//   }

//   return grid[row - 1][col - 1]
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
//dp[i] = dp[i - 2] + nums[i]
var rob = function(nums) {
  const dp = new Array(nums.length).fill(0)
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1]
  dp[0] = nums[0]
  dp[1] = nums[1]
  for (let i = 2; i <= nums.length; i++) {
      dp[i] = dp[i - 2] + nums[i]
  }
  return dp[nums.length - 1] > dp[nums.length - 2] ? dp[nums.length - 1] : dp[nums.length - 2]
};

rob([2,1,1,2])