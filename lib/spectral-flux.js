export default (a, b) => {
  let result = 0
  for (var i = 0; i < a.length; i++) {
    result += a[i] - b[i]
  }
  return result > 0 ? result : 0
}
