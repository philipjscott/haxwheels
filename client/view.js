'use strict'

import * as PIXI from 'pixi.js'
import * as assets from './assets'


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
class View {
  constructor () {
    this._app = new PIXI.Application()
    this._players = {}

    document.body.appendChild(this._app.view)
  }

  _createPlayer (id) {
    const sprite = PIXI.Sprite.fromImage(assets.sprite)

    this._players[id] = sprite
  }

  update (change) {

  }
}

export default View
