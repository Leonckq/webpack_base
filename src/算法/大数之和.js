function addBig(a, b) {
  const maxLength = Math.max(a.toString().length, b.toString().length)
  a = a.padStart(maxLength, '0')
  b = b.padStart(maxLength, '0')
  let temp = 0, flag = 0, sum = ''
  for (let i = maxLength - 1; i >= 0; i--) {
    temp = Number(a[i]) + Number(b[i]) + flag
    flag = Math.floor(temp / 10)
    sum = temp % 10 + sum
  }
  if (flag === 1) sum += '1'
  return sum
}