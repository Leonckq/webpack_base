Promise.prototype.all1 = function(iterator) {
  const promises = Array.from(iterator)
  let len = promises.length, flag = 0
  const res = []
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then(result => {
        res[index] = result
        if (++flag === len) {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}

function sort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let hasChange = false
    for (let j = 0; j < len - i - 1; i++) {
      if (arr[j] > arr[j + 1]) {
        hasChange = true
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }

    if (hasChange) break
  }
}


function insertSort (arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i - 1
    let val = arr[i]
    for (; j >=0; j--) {
      if (arr[j] > val) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = val
  }
}

function choseSort (arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i + 1
    let minIndex = i
    for (; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr
//   const middle = Math.floor(arr.length / 2)
//   const left = arr.slice(0, middle)
//   const right = arr.slice(middle)
//   return merge(mergeSort(left), mergeSort(right))
// }

// const merge = (leftArr, rightArr) => {
//   const res = []
//   let leftIndex = 0, rightIndex = 0
//   while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     if (leftArr[leftIndex] < rightArr[rightIndex]) {
//       res.push(leftArr[leftIndex++])
//     } else {
//       res.push(rightArr[rightIndex++])
//     }
//   }
//   return res.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
// }

// const quickSort = (arr, left, right) => {
//   if (left == void 0) left = 0
//   if (right == void 0) right = arr.length - 1
//   if (left <= right) return
//   const pivotIndex = fnGetPivotIndex(arr, left, right)
//   quickSort(arr, left, pivotIndex - 1 < left ? left : pivotIndex - 1)
//   quickSort(arr, pivotIndex + 1 > right ? pivotIndex + 1 : right)
// }

// const fnGetPivotIndex = (arr, left, right) => {
//   let startIndex = left
//   const pivotVal = arr[right]
//   for (let i = left; i < right; i++) {
//     if (arr[i] < pivotVal) {
//       swap(arr, i, startIndex)
//       startIndex++
//     }
//   }
//   swap(arr, startIndex, right)
// }

// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[j]]
// }


const kthNum = (arr, k) => {
  const len = arr.length
  if (k > len) return -1
  let p = fnFindPivotIndex(arr, 0, len - 1)
  while(p + 1 !== k) {
    if (p + 1 > k) {
      p = fnFindPivotIndex(arr, 0, p - 1)
    } else {
      p = fnFindPivotIndex(arr, p + 1, len - 1)
    }
  }
  return arr[p]
}

const fnFindPivotIndex = (arr, left, right) => {
  let startIndex = left
  const pivotVal = arr[right]
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


function debounce(func, wait, immediate) {
  let timeout
  return function () {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(this, arguments)
    } else {
      timeout = setTimeout(() => {
        func.apply(this, arguments)
      }, wait)
    }
  }
}


// function throttle (func, wait) {
//   let  previous = 0
//   return function () {
//     let now = +new Date
//     while(now - previous >= wait) {
//       func.apply(this, arguments)
//       previous = now
//     }
//   }
// }

// function throttle (func, wait) {
//   let timeout
//   return function() {
//     if (!!timeout) return
//     timeout = setTimeout(() => {
//       func.apply(this, arguments)
//       timeout = null
//     }, wait)
//   }
// }

function throttle(func, wait) {
  let timeout, previous
  return function () {
    let now = +new Date
    let remain = wait - (now - previous)
    if (remain <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(this, arguments)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(this, arguments)
        previous = +new Date
      }, remain)
    }
  }
}


Function.prototype.myCall = function(context) {
  context = context || window
  context.fn = this
  let args = [...arguments].slice(1)
  let res = context.fn(...args)
  delete context.fn
  return res
}


Function.prototype.myApply = function(context) {
  context = context || window
  context.fn = this
  let res = null
  if (arguments[1]) {
    res =context.fn(...arguments[1])
  } else {
    res = context.fn()
  }
  delete context.fn
  return res
}

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  let _this = this
  let args = [...arguments].slice(1)
  return function Fn() {
    if (this instanceof Fn) {
      return new _this(args, arguments)
    } else {
      return _this.apply(context, args.concat(arguments))
    }
  }

}


function clone(target, map = new Map()) {
  if (map.has(target)) return map.get(target)
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    for (let i in target) {
      cloneTarget[i] = clone(target[i], map)
    }
    map.set(target, cloneTarget)
    return cloneTarget
  } else {
    return target
  }
}


function addBig(num1, num2) {
  num1 += '', num2 += ''
  const maxLenght = Math.max(num1.length, num2.length)
  num1 = num1.padStart(maxLenght, '0')
  num2 = num2.padStart(maxLenght, '0')
  let sum = '', flag = 0
  for (let i = maxLenght - 1; i >= 0; i--) {
    let temp = Number(num1[i]) + Number(num2[i]) + flag
    flag = Math.floor(temp / 10)
    sum = temp % 10 + sum
  }
  if (flag === 1) sum = '1' + sum
  return sum 
}

