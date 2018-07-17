'use strict'

import * as PIXI from 'pixi.js'
import * as assets from './assets'

class View {
  constructor () {
    this._app = new PIXI.Application()
    this._players = {}

    document.body.appendChild(this._app.view)
  }

  _createPlayer (id, position) {
    const sprite = PIXI.Sprite.fromImage(assets.sprite)

    sprite.x = position.x
    sprite.y = position.y

    this._app.stage.addChild(sprite)
    this._players[id] = sprite
  }

  _removePlayer (id) {
    this._players[id].destroy()
  }

  _updatePosition (id, coord, value) {
    const sprite = this._players[id]

    sprite[coord] = value
  }

  updatePlayer (change) {
    switch (change.operation) {
      case 'add':
        this._createPlayer(change.path.id, change.value.position)
        break
      case 'remove':
        this._removePlayer(change.path.id)
    }
  }

  updatePosition (change) {
    console.log(change)

    if (change.operation === 'replace') {
      this._updatePosition(change.path.id, change.path.attribute, change.value)
    }
  }
}

export default View
