var urls = [
  'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 
  'https://www.kkkk1000.com/images/getImgData/gray.gif', 
  'https://www.kkkk1000.com/images/getImgData/Particle.gif', 
  'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 
  'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 
  'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 
  'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 
  'https://www.kkkk1000.com/images/wxQrCode2.png'
]
async function loadImg(url) {
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
// *** 方法一
// let count = 0
// function load(num) {
//   for (let i = 0; i < num; i++) {
//     request()
//   }
// }

// function request() {
//   count++
//   loadImg(urls.shift()).then(_ => --count && schedule())
// }


// function schedule() {
//   if (count <= 3 && urls.length) request()
// }
// load(2)

/***方法二 */
// let flag = 0
// let count = 0

// let lock = []

// function load(num) {
//   for (let i = 0; i < urls.length; i++) {
//     schedule(num)
//   }
// }

// async function schedule(num) {
//   if (count >= num) {
//     await new Promise((resolve, reject) => {
//       lock.push(resolve)
//     })
//   }

//   if (urls.length > 0) {
//     console.log(count)
//     count++
//     await loadImg(urls.shift())
//     count--
//     lock.length && lock.shift()()
//   }
// }
// load(2)

/**方法三 */
function limitLoad(urls, handler, limit) {
  const sequence = [].concat(urls)
  let promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(_ => index)
  })

  {
    let p = Promise.race(promises)
    for(let i = 0; i < sequence.length; i++) {
      p.then(res => {
        promises[res] = handler(sequence[i]).then(_ => res)
        return Promise.race(promises)
      })
    }
  }

}




limitLoad(urls, loadImg, 2)