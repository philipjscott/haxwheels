const { Cardinal, Point2 } = require('./math')

class Player {
  constructor (x, y) {
    this.position = new Point2(x, y)
    this.movement = new Cardinal({
      n: false,
      w: false,
      e: false,
      s: false
    })
  }
}

module.exports = Player
