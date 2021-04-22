var urls = [
  'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 
  'https://www.kkkk1000.com/images/getImgData/gray.gif', 
  'https://www.kkkk1000.com/images/getImgData/Particle.gif', 
  'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 
  'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 
  'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 
  'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 
  'https://www.kkkk1000.com/images/wxQrCode2.png'
  ];
  function loadImg(url) {
      return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = function () {
              console.log('一张图片加载完成');
              resolve();
          }
          img.onerror = reject
          img.src = url
      })
  }
//省略代码

// let count = 0

// function bingfa (num) {
//   for(let i = 0; i < num; i++) {
//     fn()
//   }
// }

// function fn() {
//   count++
//   if (count > 0 && count <= 3) {
//     loadImg(urls.shift()).then(_ => {
//       count--
//     }).then(fn)
//   }
// }


// const lock = []
// let count = 0
// function bingfa(urls) {
//   for(let i =0; i < urls.length; i++) {
//     fn()
//   }
// }

// async function fn() {
//   if (count >= 3) {
//     await new Promise((resolve, reject) => {
//       lock.push(resolve)
//     })
//   }

//   if (urls.length >= 0) {
//     ++count
//     await loadImg(urls.shift())
//     --count
//     lock.length && lock.shift()()
//   }
// }

function loadImg(urls, handler, limit) {
  const sequence = urls.slice()
  let promises = []

  promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(_ => {
      return index
    })
  })

  (async function loop() {
    let p = Promise.race(promises)
    for(let i = 0; i < sequence.length; i++) {
      p = p.then(index => {
        promises[index] = handler(sequence(i)).then(_ => {
          return index
        })
        return Promise.race(promises)
      })
    }
  })()

}