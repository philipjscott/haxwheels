'use strict'

import Controller from './controller'
import * as Colyseus from 'colyseus.js'
import * as PIXI from 'pixi.js'
import * as assets from './assets'

const app = new PIXI.Application()
const client = new Colyseus.Client('ws://localhost:8080')
const room = client.join('race')
const controller = new Controller(room)

controller.register({
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right'
})

room.listen('players/:id/position/:attribute', (change) => {
  console.log(change.path.id, change.path.attribute, change.value)
})

document.body.appendChild(app.view)

PIXI.loader.add('sprite', assets.sprite).load((loader, resources) => {
  const sprite = new PIXI.Sprite(resources.sprite.texture)

  sprite.x = app.renderer.width / 2
  sprite.y = app.renderer.height / 2
  sprite.anchor.x = 0.5
  sprite.anchor.y = 0.5

  app.stage.addChild(sprite)
  app.ticker.add(() => {
    sprite.rotation += 0.01
  })
})
