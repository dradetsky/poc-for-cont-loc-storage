const timeoutHandler = require('./lib')

function barHandler(req, res) {
  setTimeout(timeoutHandler, 3000)
  res.send('sup bar')
}

module.exports = {
  barHandler
}
