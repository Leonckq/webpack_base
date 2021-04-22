 function findK(arr, k) {
  if (k > arr.length) {
    return -1
  }
  let left = 0, right = arr.length - 1

  let p = fnGetPivotIndex(arr, left, right)
  while (p + 1 !== k) {
    if (p + 1 < k) {
      p = fnGetPivotIndex(arr, p + 1, right)
    } else {
      p = fnGetPivotIndex(arr, left, p - 1)
    }
  }
}

function fnGetPivotIndex(arr, left, right) {
  let startIndex = 0
  let curValue = arr[right]
  for (let i = left; i < right; i++) {
    if (arr[i] < curValue) {
      swap(arr, startIndex, i)
      startIndex++
    }
  }
  swap(arr, startIndex, right)
  return startIndex
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}