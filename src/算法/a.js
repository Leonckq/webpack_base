Promise.prototype.myAll = function(promises) {
  promises = Array.from(promises)
  let count = 0, len = promises.length
  const ret = []
  return new Promise((resolve, reject) => {
    promises.forEach((promiseItem, index) => {
      Promise.resolve(promiseItem).then(res => {
        ret[index] = res
        if (++count === len) {
          resolve(ret)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}
