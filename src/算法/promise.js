const p1 = new Promise((resolve, reject) => { 
  reject(555)
  console.log(23244)
})
  .catch((err) => {
    console.log(err)
  })

const p2 = p1.then(
  function(bb) {
    return 123
  }
)

p2.then(
  (aa) => console.log('成功'),
  (aa) => console.log(('失败'))
).catch((err) => {
  console.log('catch')
  console.log(err)
})

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// })

// promise.then(() => {
//     console.log(3);
// })

// console.log(4);

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)