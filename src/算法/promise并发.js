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


var count = 0;

function bingfa(len) {
  for(let i = 0; i < len; i++) {
    diaodu()
  }
}


function diaodu() {
  if (urls.length) {
    request()
  }
}


function request() {
  count++
  console.log("并发数:",count)
  if (urls.length > 0 && count <=3) {
    loadImg(urls.shift()).then(res => {
      count--
      request()
    })
  }
}

bingfa(3)