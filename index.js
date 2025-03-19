
(async () => {
  const c = async() => {
    return 1
  }
const b = async() => {
  return c()
}
const a = async() => {
  return b()
}
const result = await a()
console.log(result)
})()