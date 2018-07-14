function registerRooms (gameServer) {
  const roomMap = {
    'race': 'race'
  }

  for (const name in roomMap) {
    gameServer.register(name, require(`./rooms/${roomMap[name]}`))
  }
}

module.exports = registerRooms
