/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  // const len = nums.length
  // this.nums = new Array(len + 1).fill(0)
  // // console.log(this.nums)
  // for (let i = 0; i < len; i++) {
  //     this.nums[i + i] = this.nums[i] + nums[i]
  // }
  const n = nums.length;
  this.sums = new Array(n + 1).fill(0);
  debugger
  for (let i = 0; i < n; i++) {
      this.sums[i + 1] = this.sums[i] + nums[i];
  }
  console.log(this.nums)
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {

};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/

NumArray([ -2, 0, 3, -5, 2, -1 ])