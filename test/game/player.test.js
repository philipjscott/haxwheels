/* global describe, it */

'use strict'

require('module-alias/register')

const Player = require('@game/player')
const { expect } = require('chai')

describe('Player class', () => {
  it('has the correct position when instantiated', () => {
    const p = new Player(4, 2)

    expect(p.position.x).to.equal(4)
    expect(p.position.y).to.equal(2)
  })

  it('has the correct values when fields are mutated', () => {
    const p = new Player(4, 2)

    p.position.x = 42
    p.position.y *= 1000

    expect(p.position.x).to.equal(42)
    expect(p.position.y).to.equal(2000)
  })
})
