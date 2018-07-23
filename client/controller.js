const virtuals = {
  up: {
    keydown (model) {
      model.send({move: 'up'})
    }
  },
  down: {
    keydown (model) {
      model.send({move: 'down'})
    }
  },
  left: {
    keydown (model) {
      model.send({move: 'left'})
    }
  },
  right: {
    keydown (model) {
      model.send({move: 'right'})
    }
  }
}

const keymap = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right'
}

export {virtuals, keymap}
