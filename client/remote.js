console.log('Hello Again!')

var keycode = require('keycode')

const KeyDownHandler = (e) => {
  e.preventDefault()
  switch (keycode(e)) {
    case 'w':
      console.log('W pressed')
      break
    case 'a':
      console.log('A pressed')
      break
    case 's':
      console.log('S pressed')
      break
    case 'd':
      console.log('D pressed')
      break
  }
}

const KeyUpHandler = (e) => {
  e.preventDefault()
  switch (keycode(e)) {
    case 'w':
      console.log('W released')
      break
    case 'a':
      console.log('A released')
      break
    case 's':
      console.log('S released')
      break
    case 'd':
      console.log('D released')
      break
  }
}

document.body.addEventListener('keydown', KeyDownHandler)
document.body.addEventListener('keyup', KeyUpHandler)
