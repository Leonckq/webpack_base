// // function fn (nums) {
// //   let res = []
// //   for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] > 9) {
// //       num = nums[i].toString().split('')
// //       res = res.concat(num)
// //     } else {
// //       res.push(nums[i])
// //     }
// //   }
// //   res = res.sort((a, b) => b - a)
// //   return res.join('')
// // }
// // console.log(fn([3,4,5,34,556,11349,5]))



// var rob = function(nums) {
//   const dp = new Array(nums.length).fill(0)
//   if (nums.length === 1) return nums[0]
//   if (nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1]
//   dp[0] = 0
//   dp[1] = nums[0] > nums[1] ? nums[0] : nums[1]
//   for (let i = 2; i <= nums.length; i++) {
//     dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
//   }
//   return dp[nums.length]
// };

// console.log(rob([2,1,1,2]))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const rob = function(nums) {
//   const len = nums.length
//   if (len === 0) return 0
//   if (len === 1) return nums[0]
//   if (len === 2) return Math.max(nums[0], nums[1])
//   const nums1 = nums.slice(1)
//   const nums2 = nums.slice(0, -1)
//   return Math.max(robRange(nums1), robRange(nums2))
// }

// const robRange =  function(nums) {
//   let len = nums.length
//   if (!len) return 0
//   const dp = new Array(len + 1).fill(0)
//   dp[0] = 0
//   dp[1] = nums[0] 
//   for (let i = 2; i <= len; i++) {
//       dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
//   }
//   return dp[len]
// }

// rob([1,3,4,67,8])

function permute(nums) {
  let res = []
  let used = {}
  function dfs(path) {
    if (path.length === nums.length) return res.push(path.slice())
    for (let num of nums) {
      if (used[num]) continue
      path.push(num)
      used[num] = true
      dfs(path)
      path.pop()
      used[num] = false
    }
  }

  dfs([])
  return res
}

console.log(permute([1,2,3]))


function quickSort(arr, left, right) {
  if (left == void 0) left = 0
  if (right === void 0) right = arr.length - 1
  if (left >= right) return
  const pIndex = fnFindPIndex(arr, left, right)
  quickSort(arr, left, pIndex - 1 < left ? left : pIndex - 1)
  quickSort(arr, pIndex + 1 > right ? pIndex + 1 : right, right )
}



function fnFindPIndex(arr, left, right) {
  let startIndex = left
  let pivotVal = arr[right]
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, right)
  return startIndex
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}




var sumNumbers = function(root) {
  if (root === null) return 0
  let sum = 0
  const nodeQueue = []
  const numQueue = []
  nodeQueue.push(root)
  numQueue.push(root.val)
  while(nodeQueue.length) {
    const node = nodeQueue.shift()
    const num = numQueue.shift()
    const left = node.left, right = node.right
    if (left === null && right === null) {
      sum += num
    } else {
      if (left !== null) {
        nodeQueue.push(left)
        numQueue.push(num * 10 + left.val)
      }
      if (right !== null) {
        nodeQueue.push(right)
        numQueue.push(num * 10 + right.val)
      }
    }
  }

}


var levelOrder = function (root) {
  if (!root) return []
  let quene = [root]
  let res = []
  while(quene.length) {
    let arr = []
    let len = quene.length
    while(len--) {
      const node = quene.shift()
      arr.push(node.val)
      if (node.left) quene.push(node.left)
      if (node.right) quene.push(node.right)

    }
    res.push(arr)
  }
  return res 
}





var longestPalindrome = function(s) {
  let n = s.length
  const dp = Array.from(new Array(n), () => new Array(n))
  let res = ''
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1)
      }
    }
  }
  return res
}


var longestPalindrome = function(s) {
  let n = s.length
  {
    for (let i = 0; i < n; i++) {
      helper(i, i) // 回文子串长度为奇数
      helper(i, i + 1) // 回文子串长度为偶数
    }
  }

  function helper(m, n) {
    while(s[m] === s[n] && m >= 0 && n < s.length) {
      m--
      n++
    }

    if (n - 1 - (m + 1) + 1 > res.length) {
      res = s.slice(m + 1, n)
    }

  }

}

var permute = function(nums) {
  let res = []

  const dfs = path => {
    if (path.length === nums.length) return res.push(path.slice())
    for (let num of nums) {
      if (path.includes(num)) continue
      path.push(num)
      dfs(path)
      path.pop()
    }
  }
  dfs([])
  return res
}


var permuteUnique = function(nums) {
  if (nums.length <= 0) return nums
  let res = []
  const vis = new Array(nums.length).fill(false)
  const dfs = (parh) => {
    if (parh.length === nums.length) return res.push(parh.slice())
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue
      }
      path.push(nums[i])
      vis[i] = true
      dfs(path)
      path.pop()
      vis[i] = false
    }
  }
  dfs([])
  return res
}

const inorderTraversal = (root) => {
  const res = []
  const stack = []
  while (root) {
    stack.push(root)
    root = root.left
  }
  while(stack.length) {
    let node = stack.pop()
    res.push(node.val)
    node = node.right
    while(node) {
      stack.push(node)
      node = node.left
    }
  }

  return res
}

function minSubArrayLen (target, nums) {
  let sum = 0, j = 0, i = 0
  let minLen = -Infinity
  while(j < nums.length) {
    sum += nums[j]
    while(sum >= target) {
      minLen = Math.min(minLen, j - i + 1)
      sum -= sum[i]
      i++
    }
    j++
  }
  return minLen === -Infinity ? 0 : minLen
}


var maxProfit = function(prices) {
  if (!prices || prices.length < 1) return 0
  let min = Infinity, max = 0
  for (let price of prices) {
    min = Math.min(min, price)
    max = Math.max(max, price - min)
  }
  return max === Infinity ? 0 : max
}