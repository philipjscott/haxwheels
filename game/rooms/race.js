const { Room } = require('colyseus')
const Player = require('../player')

class RaceRoom extends Room {
  onInit () {
    this.setState({
      players: {}
    })
    this.setSimulationInterval(this.update.bind(this))
  }

  update () {
    for (const playerId in this.state.players) {
      const step = 3
      const player = this.state.players[playerId]

      if (player.movement.n) {
        player.position.y -= step
      }
      if (player.movement.s) {
        player.position.y += step
      }
      if (player.movement.e) {
        player.position.x += step
      }
      if (player.movement.w) {
        player.position.x -= step
      }
    }
  }

  onJoin (client) {
    this.state.players[client.sessionId] = new Player(0, 0)

    console.log(`Player ${client.sessionId} joined!`)
  }

  onMessage (client, data) {
    const player = this.state.players[client.sessionId]

    console.log(`Message received from ${client.sessionId}!`)

    if (!player) return

    player.movement.set({
      n: data.up,
      s: data.down,
      e: data.right,
      w: data.left
    })
  }

  onLeave (client, consented) {
    delete this.state.players[client.sessionId]

    console.log(`Player ${client.sessionId} left!`)
  }
}

module.exports = RaceRoom
