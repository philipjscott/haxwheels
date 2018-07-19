'use strict'

function linearInterp (a, b, t) {
  return a + (b - a) * t
}

function cosineInterp (a, b, t) {
  return linearInterp(a, b, 0.5 * (1 - Math.cos(t * Math.PI)))
}

export {
  linearInterp,
  cosineInterp
}
