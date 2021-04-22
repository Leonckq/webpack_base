var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {

  console.log(e);
  container.innerHTML = count++;
};
container.onmousemove = throttle(getUserAction, 1000);

// function throttle(func, wait) {
//   let previous = 0
//   return  function() {
//     let now = +new Date()
//     while(now - previous >= wait) {
//       func.apply(this, arguments)
//       previous = now
//     }
//   }
// }


// function throttle(func, wait) {
//   let timeout
//   return function() {
//     if (!!timeout) return
//     timeout = setTimeout(() => {
//       func.apply(this, arguments)
//       timeout = null
//     }, wait)
//   }
// }

function throttle (func, wait) {
  let timeout, privious = 0
  return function () {
    let now = +new Date
    const remain = wait - (now - privious)
    if (remain <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      privious = now
      func.apply(this, arguments)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, arguments)
        timeout = null
        privious = +new Date
      }, remain)
    }
  }
}