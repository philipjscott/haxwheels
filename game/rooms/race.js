const { Room } = require('colyseus')
const Player = require('../player')

class RaceRoom extends Room {
  onInit () {
    this.setState({
      players: {}
    })
  }

  onJoin (client) {
    this.state.players[client.sessionId] = new Player(0, 0)

    console.log(`Player ${client.sessionId} joined!`)
  }

  onMessage (client, data) {
    const step = 10
    const player = this.state.players[client.sessionId]

    console.log('Message received!', data)

    switch (data.move) {
      case 'left':
        player.position.x -= step
        break
      case 'right':
        player.position.x += step
        break
      case 'up':
        player.position.y -= step
        break
      case 'down':
        player.position.y += step
    }
  }

  onLeave (client) {
    delete this.state.players[client.sessionId]

    console.log(`Player ${client.sessionId} left!`)
  }
}

module.exports = RaceRoom
