'use strict'

import Controller from 'key-controller'
import {virtuals, keymap} from './controller.js'
import View from './view'
import * as Colyseus from 'colyseus.js'

const client = new Colyseus.Client('ws://localhost:8080')
const room = client.join('race')
console.log(virtuals)
const controller = new Controller(room, virtuals)
const view = new View()

controller.register(keymap)

room.listen('players/:id', change => view.updatePlayer(change))
room.listen('players/:id/position/:attribute', change => view.updatePosition(change))
