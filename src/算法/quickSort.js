const quickSort = (arr, left, right) => {
  if (left == void 0) left = 0
  if (right === void 0) right = arr.length
  if (left <= right) {
    let pivot = right
    let pivotIndex = fnGetPivotIndex(arr, pivot, left, right)
    quickSort(arr, left, pivotIndex -1 < left ? left : pivotIndex -1)
    quickSort(arr, pivotIndex + 1 > right ? right : pivotIndex + 1, right)
  }
}

function fnGetPivotIndex(arr, pivot, left, right) {
  let startIndex = left
  const pivotVal = arr[pivot]
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i , startIndex++)
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

function swap(arr, i, j) {
  [arr[i], arr[i]] = [arr[j], arr[i]] 
}