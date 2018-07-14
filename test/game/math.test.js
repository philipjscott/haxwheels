/* global describe, it */

'use strict'

require('module-alias/register')

const { Point2 } = require('@game/math')
const { expect } = require('chai')

describe('math library', () => {
  describe('Point2 class', () => {
    it('has the correct values when instantiated', () => {
      const p = new Point2(4, 2)

      expect(p.x).to.equal(4)
      expect(p.y).to.equal(2)
    })

    it('has the correct values when fields are mutated', () => {
      const p = new Point2(4, 2)

      p.x = 42
      p.y *= 1000

      expect(p.x).to.equal(42)
      expect(p.y).to.equal(2000)
    })
  })
})
