import Microphone from './microphone'
import Canvas from './canvas'
import SpectralFlux from './spectral-flux'
import F from 'fkit'

let canvas = new Canvas(document.getElementById('canvas'), 512)

Microphone.listen(512).then((mic) => {
  var lastSamples, fluxHistory = []
  let animate = () => {
    requestAnimationFrame(animate)

    let samples = new Uint8Array(512)
    mic.analyser.getByteFrequencyData(samples)
    let spectralFlux = lastSamples ? SpectralFlux(samples, lastSamples) : 0
    fluxHistory.push(spectralFlux)
    if (fluxHistory.length > 11) fluxHistory.shift()
    let averageFlux = 1.5 * F.sum(fluxHistory) / fluxHistory.length

    canvas.draw(samples, spectralFlux, averageFlux)
    lastSamples = samples
  }
  animate()
})
