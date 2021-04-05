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











// var count = 0;
// //对加载图片的函数做处理，计数器叠加计数
// function bao(){
//     count++;
//     console.log("并发数:",count)
//     //条件判断，urls长度大于0继续，小于等于零说明图片加载完成
//     if(urls.length>0&&count<=3){
//     //shift从数组中取出连接
//         loadImg(urls.shift()).then(()=>{
//         //计数器递减
//             count--
//             //递归调用
//             }).then(bao)
//     }
// }
// function async1(){
// //循环开启三次
//     for(var i=0;i<3;i++){
//         bao();
//     }
// }
// async1()
