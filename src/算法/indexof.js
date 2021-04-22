// String.prototype.indexOf1 = function(str) {
//   let oriStr = this.toString()
//   let s = str[0]
//   for (let i = 0; i < oriStr; i++) {
//     if(oriStr[i] === s) {
//       if (oriStr.substr(i, str.length) === str) return i
//     }
//   }
//   return -1
// }

// /**
//  * @param {number} n
//  * @return {number}
//  */
//  var fib = function(n, hash = new Map()) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   if (hash.has(n)) return hash.get(n)
//   hash.set(n, fib(n - 1, hash) + fib(n - 2, hash))
//   return hash.get(n)
// };

// console.log(fib(20))

/**
/**
 * 第k大的数
 * @param {array} arr 
 * @param {number} k  
 */
 function kthNum(arr, k) {
  const len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = partition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}

function partition(arr, start, end) {
  let i = start;
  let pivot = arr[end];
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }
  swap(arr, i, end);
  return i;
}

function swap(arr, i, j) {
  if (i === j) return;
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(kthNum([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 20))