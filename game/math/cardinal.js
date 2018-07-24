class Cardinal {
  constructor (directions) {
    this.set(directions)
  }

  // filter keys to NSEW
  set ({ n, s, e, w }) {
    const directions = { n, s, e, w }

    for (const key in directions) {
      if (directions[key] !== undefined) {
        this[key] = directions[key]
      }
    }
  }
}

module.exports = Cardinal
