import Microphone from './microphone'
import Canvas from './canvas'
import SpectralFlux from './spectral-flux'
import F from 'fkit'

let RESOLUTION = 512

let canvas = new Canvas(document.getElementById('canvas'), RESOLUTION)

Microphone.listen(RESOLUTION).then((mic) => {
  var lastSamples, fluxHistory = []
  let animate = () => {
    requestAnimationFrame(animate)

    let samples = new Uint8Array(RESOLUTION)
    mic.analyser.getByteFrequencyData(samples)
    let spectralFlux = lastSamples ? SpectralFlux(samples, lastSamples) : 0
    fluxHistory.push(spectralFlux)
    if (fluxHistory.length > 512) fluxHistory.shift()
    let averageFlux = 2.5 * F.sum(fluxHistory) / fluxHistory.length

    canvas.draw(samples, spectralFlux, averageFlux)
    lastSamples = samples
  }
  animate()
})
