// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canPartition = function(nums) {
//   const n = nums.length
//   let sum = 0, max = 0
//   sum = nums.reduce((pre, cur) => {
//     if (cur > max) max = cur
//     return cur + pre
//   }, 0)
//   if (sum & 1) {
//     return false
//   }
//   const target = Math.floor(sum / 2)
//   if (max > target) return false
//   const dp = new Array(n).fill(0).map(v => new Array(target + 1, false))
// }
// // canPartition([12])


var canPartition = function(nums) {
  const n = nums.length
  if (n < 2) {
      return false;
  }
  let sum = 0, maxNum = 0
  for (const num of nums) {
      sum += num;
      maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
      return false;
  }
  const target = Math.floor(sum / 2)
  if (maxNum > target) {
      return false;
  }
  const dp = new Array(n).fill(0).map(v => new Array(target + 1).fill(false))
  dp[0][0] = true
  if (nums[0] <= target) dp[0][nums[0]] = true
  for (let i = 1; i < n; i++) {
      const num = nums[i];
      for (let j = 0; j <= target; j++) {
          if (j >= num) {
              dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
          } else {
              dp[i][j] = dp[i - 1][j];
          }
      }
      // 不把第i个物品放入背包
      // for (let j = 0; j <= target; j++) {
      //     if (dp[i - 1][j] === true) dp[i][j] = dp[i - 1][j]
      // }
      // // 把第i个物品放入背包
      // for (let j = 0; j <= target - num; j++) {
      //     if (dp[i - 1][j] === true) dp[i][j + num] = true
      // }

  }
  return dp[n - 1][target];
};