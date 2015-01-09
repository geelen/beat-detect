import Microphone from './microphone'
let canvas = document.getElementById('canvas'),
  ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 1024
ctx.fillStyle = "green"
ctx.fillRect(10,10,80,80)

var mic = new Microphone()
mic.listen().then(() => {
  console.log(mic)
})
