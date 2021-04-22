const root = {
  val: 3,
  left: { val: 9 },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  }
}



// 广度优先遍历
const  maxDepth = function(root) {
  if (!root) return 0
  let depth = 0, bfs = [root]
  while(bfs.length) {
    let tempBfs = []
    depth++
    for(let i = 0; i < bfs.length; i++) {
      if (bfs[i].left) {
        tempBfs.push(bfs[i].left)
      }
      if (bfs[i].right) tempBfs.push(bfs[i].right)
    }
    bfs = tempBfs
  }

  return depth
}

// 深度优先

const dfsDepth = function (root) {
  if (!root) return 0
  return Math.max(dfsDepth(root.left), dfsDepth(root.right)) + 1
}


console.log(maxDepth(root))
console.log(dfsDepth(root))
