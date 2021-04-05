Promise.all = function (promises) {
  promises = Array.from(promises)
  const resultList = []
  let count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promiseItem, index) => {
      Promise.resolve(promiseItem).then(res => {
        resultList[index] = res
        if (++count === resultList.length) {
          resolve(resultList)
        }
      })
      .catch(err => {
        reject(err)
      })
    })
  })
}