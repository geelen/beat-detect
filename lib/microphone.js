export default
class Microphone {
  listen() {
    return new Promise((resolve, reject) => {
      console.log(AudioContext)
      this.context = new AudioContext()
      let userMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
      userMedia.call(navigator, {audio: true}, (stream) => {
        this.stream = stream
        this.analyser = this.context.createAnalyser()
        this.source = this.context.createMediaStreamSource(stream)
        this.source.connect(this.analyser)
        resolve(this)
      }, reject)
    })
  }
}
