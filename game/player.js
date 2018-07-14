const { Point2 } = require('./math')

class Player {
  constructor (x, y) {
    this.position = new Point2(x, y)
  }
}

module.exports = Player
