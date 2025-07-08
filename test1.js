const isDone = true

const promise = new Promise(resolve => {
  console.log('대기(pending)')
  setTimeout(() => {
    if (isDone) {
      resolve(123) // 이행(fulfilled)
    }
  }, 3000)
})

const res = await promise
console.log(res) // 123

function delay(ms = 3000) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
await Promise.all([delay(5000), delay(1000), delay(4000), delay(2000)])
console.log(123)
