'use strict'

import Controller from './controller'
import View from './view'
import * as Colyseus from 'colyseus.js'

const client = new Colyseus.Client('ws://localhost:8080')
const room = client.join('race')
const controller = new Controller(room)
const view = new View()

controller.register({
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right'
})
room.listen('players/:id', change => view.updatePlayer(change))
room.listen('players/:id/position/:attribute', change => view.updatePosition(change))
