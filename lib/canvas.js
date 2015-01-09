export default
class Canvas {
  constructor(elem, size) {
    this.elem = elem
    this.size = size
    this.ctx = elem.getContext("2d")

    this.elem.width = size
    this.elem.height = size
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(10, 10, 80, 80)
  }

  draw(sampleHistory) {
    for (let i = 0; i < sampleHistory.length; i++) {
      for (let j = 0; j < sampleHistory[i].length; j++) {
        let sample = 255 - sampleHistory[i][j]
        this.ctx.fillStyle = `rgb(${sample},${sample},${sample})`
        this.ctx.fillRect(512 - i - 1, 512 - j - 1, 1, 1)
      }
    }
  }
}
