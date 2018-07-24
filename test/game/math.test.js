/* global describe, it */

'use strict'

require('module-alias/register')

const { Point2, Cardinal } = require('@game/math')
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

  describe('Cardinal class', () => {
    it('has the correct values when instantiated', () => {
      const c = new Cardinal({
        n: true,
        s: false,
        w: true,
        e: true
      })

      expect(c.n).to.equal(true)
      expect(c.s).to.equal(false)
      expect(c.w).to.equal(true)
      expect(c.e).to.equal(true)
    })

    it('constructor filters out non-cardinal keys', () => {
      const c = new Cardinal({
        n: true,
        s: false,
        w: true,
        e: true,
        wew: true,
        hehe: true
      })

      expect(c.n).to.equal(true)
      expect(c.s).to.equal(false)
      expect(c.w).to.equal(true)
      expect(c.e).to.equal(true)
      expect(c.wew).to.equal(undefined)
      expect(c.hehe).to.equal(undefined)
    })

    it('has the correct values when fields are mutated', () => {
      const c = new Cardinal({
        n: true,
        s: false,
        w: true,
        e: true
      })

      c.n = false
      c.s = true

      expect(c.n).to.equal(false)
      expect(c.s).to.equal(true)
    })

    it('Cardinal.set(...) will only set members if not undefined', () => {
      const c = new Cardinal({
        n: false,
        s: false,
        w: true,
        e: true
      })

      c.set({
        n: true,
        s: true,
        w: undefined,
        e: undefined
      })

      expect(c.n).to.equal(true)
      expect(c.s).to.equal(true)
      expect(c.w).to.equal(true)
      expect(c.e).to.equal(true)
    })
  })

  it('Cardination.set(...) will filter out non-cardinal keys', () => {
    const c = new Cardinal({
      n: false,
      s: false,
      w: true,
      e: true
    })

    c.set({
      n: true,
      s: true,
      wew: true,
      lad: true
    })

    expect(c.n).to.equal(true)
    expect(c.s).to.equal(true)
    expect(c.w).to.equal(true)
    expect(c.e).to.equal(true)
    expect(c.wew).to.equal(undefined)
    expect(c.lad).to.equal(undefined)
  })
})
