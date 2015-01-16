class Microphone {
  constructor(resolution, stream) {
    this.context = new AudioContext()
    this.stream = stream
    this.analyser = this.context.createAnalyser()
    this.analyser.fftSize = resolution * 2
    this.analyser.smoothingTimeConstant = 0.5
    this.source = this.context.createMediaStreamSource(stream)
    this.source.connect(this.analyser)
  }
}

export default {
  listen(resolution) {
    return new Promise((resolve, reject) => {
      let userMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
      userMedia.call(navigator, {audio: true}, (stream) => {
        resolve(new Microphone(resolution, stream))
      }, reject)
    })
  }
}
