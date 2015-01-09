class Microphone {
  constructor(stream) {
    this.context = new AudioContext()
    this.stream = stream
    this.analyser = this.context.createAnalyser()
    this.analyser.fftSize = 1024
    this.source = this.context.createMediaStreamSource(stream)
    this.source.connect(this.analyser)
  }
}

export default {
  listen() {
    return new Promise((resolve, reject) => {
      let userMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
      userMedia.call(navigator, {audio: true}, (stream) => {
        resolve(new Microphone(stream))
      }, reject)
    })
  }
}
