var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {

  console.log(e);
  container.innerHTML = count++;
};

// container.onmousemove = getUserAction;

// function debounce(func, wait) {
//   let timeout
//   return function () {
//     clearTimeout(timeout)
//     timeout = setTimeout(func, wait)
//   }
// }

container.onmousemove = debounce(getUserAction, 1000);

// function debounce(func, wait) {
//   let timout
//   return function () {
//     clearTimeout(timout)
//     timout = setTimeout(() => {
//       func.apply(this, [...arguments])
//     }, wait)
//   }
// }

// function debounce(func, wait, immediate) {
//   let timeout
//   return function () {
//     clearTimeout(timeout)
//     if (immediate) {
//       let callNow = !timeout
//       timeout = setTimeout(() => {
//         timeout = null
//       }, wait)
//       if (!callNow) func.apply(this, arguments)
//     } else {
//       timeout = setTimeout(() => {
//         func.apply(this, [...arguments])
//       }, wait)
//     }
//   }
// }

function debounce(func, wait, immediate) {
  let timeout, result
  return function() {
    if (timeout)clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(this, arguments)
    } else {
      setTimeout(() => {
        result = func.apply(this, arguments)
      }, wait)
    }
    return result
  }
}