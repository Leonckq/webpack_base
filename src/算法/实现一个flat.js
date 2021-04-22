// function flat(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res.push(...flat(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res 

// }


// function flat(arr) {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flat(cur): cur)
//   }, [])
// }

// function flat(arr) {
//   const res = []
//   const stack = [].concat(arr)
//   while(stack.length !== 0) {
//     const val = stack.pop()
//     if (Array.isArray(val)) {
//       stack.push(...val)
//     } else {
//       // stack.unshift
//       res.unshift(val)
//     }
//   }
//   return res
// }

// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
// console.log(flat(arr))

// 通过传入整数参数控制“拉平”层数
// function flat(arr, num) {
//   if (num <= 0) return arr.slice()
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flat(cur, --num): cur)
//   }, [])
// }




















