import Microphone from './microphone'
import Canvas from './canvas'

let canvas = new Canvas(document.getElementById('canvas'), 512)

Microphone.listen(512).then((mic) => {
  var lastSamples
  let animate = () => {
    requestAnimationFrame(animate)

    let samples = new Uint8Array(512)
    mic.analyser.getByteFrequencyData(samples)
    canvas.draw(samples)
  }
  animate()
})
