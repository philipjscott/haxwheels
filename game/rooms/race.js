const { Room } = require('colyseus')

class RaceRoom extends Room {
  onInit () {
    this.setState({
      players: {}
    })
  }

  onJoin (client) {

  }
}

module.exports = RaceRoom
