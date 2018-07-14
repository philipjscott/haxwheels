'use strict'

import * as Colyseus from 'colyseus.js'
import { $ } from './util'

const client = new Colyseus.Client('ws://localhost:8080')
const room = client.join('race')

console.log('Client JavaScript loaded!')

room.listen('players/:id/:attribute', (change) => {
  console.log(change.path.id, change.path.attribute, change.value)
})

const directions = ['up', 'down', 'left', 'right']

directions.forEach((direction) => {
  $('#' + direction).addEventListener('click', () => {
    console.log(`${direction} clicked!`)

    room.send({ move: direction })
  })
})
