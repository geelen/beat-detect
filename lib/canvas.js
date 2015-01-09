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

  draw(samples, flux) {
    let imageData = this.ctx.getImageData(1, 0, this.size - 1, this.size - 1)
    this.ctx.putImageData(imageData, 0, 0)
    for (let j = 0; j < samples.length; j++) {
      let sample = 255 - samples[j]
      this.ctx.fillStyle = `rgb(${sample},${sample},${sample})`
      this.ctx.fillRect(this.size - 1, this.size - j - 1, 1, 1)
    }

    let absFlux = Math.abs(flux)
    this.ctx.fillStyle = flux > 0 ? 'red' : 'blue'
    this.ctx.fillRect(this.size - 1, 0, 1, Math.round(10 * absFlux / this.size))
  }
}
