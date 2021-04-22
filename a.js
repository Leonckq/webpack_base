function fn (nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 9) {
      num = nums[i].toString().split('')
      res = res.concat(num)
    } else {
      res.push(nums[i])
    }
  }
  res = res.sort((a, b) => b - a)
  return res.join('')
}
console.log(fn([3,4,5,34,556,11349,5]))
