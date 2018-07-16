import keycode from 'keycode'

const defaultControls = {
  left: 'a',
  up: 'w',
  right: 'd',
  down: 's'
}

class Controller {
  constructor (transmitter, controls = defaultControls) {
    this._transmitter = transmitter
    this._handler = null

    this.register(controls)
  }

  register (controls) {
    const handler = (e) => {
      switch (keycode(e)) {
        case controls.left:
          this._transmitter.send({ move: 'left' })
          break
        case controls.right:
          this._transmitter.send({ move: 'right' })
          break
        case controls.up:
          this._transmitter.send({ move: 'up' })
          break
        case controls.down:
          this._transmitter.send({ move: 'down' })
          break
      }
    }

    document.body.removeEventListener('keydown', this._handler)
    document.body.addEventListener('keydown', handler)

    this._handler = handler
  }
}

export default Controller
