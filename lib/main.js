import Microphone from './microphone'
import Canvas from './canvas'

let canvas = new Canvas(document.getElementById('canvas'), 512)

Microphone.listen(512).then((mic) => {
  let sampleHistory = []
  let animate = () => {
    requestAnimationFrame(animate)

    let samples = new Uint8Array(512)
    mic.analyser.getByteFrequencyData(samples)
    sampleHistory.unshift(samples)
    if (sampleHistory.length > 512) sampleHistory.pop()

    canvas.draw(sampleHistory)
  }
  animate()
  window.sampleHistory = sampleHistory
})
