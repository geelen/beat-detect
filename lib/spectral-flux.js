export default (a, b) => {
  let result = 0
  for (var i = 0; i < a.length; i++) {
    result += 50 * Math.pow(i + 1, -1.5) * Math.max(0, a[i] - b[i])
  }
  return result
}
