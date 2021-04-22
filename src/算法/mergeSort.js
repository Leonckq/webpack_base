function mergeSort(arr) {
  if (!Array.isArray) return
  const middle = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0 , middle)
  const rightArr = arr.slice(middle)
  merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  let leftIndex = 0, rightIndex = 0
  const temp = []
  while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      temp.push(leftArr[leftIndex])
      leftIndex++
    } else {
      temp.push(rightArr[rightIndex])
      rightIndex++
    }
  }
  return temp.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}