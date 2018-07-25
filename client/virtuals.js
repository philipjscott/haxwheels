const directions = ['up', 'down', 'left', 'right']
let virtuals = {}

directions.forEach((key) => {
  virtuals[key] = {
    keydown (model) {
      console.log(key, true)
      let data = {}
      data[key] = true

      model.send(data)
    },
    keyup (model) {
      console.log(key, false)
      let data = {}
      data[key] = false

      model.send(data)
    }
  }
})

export default virtuals
