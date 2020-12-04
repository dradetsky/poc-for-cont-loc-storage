const log = require('./win')

function quuxHandler(req, res) {
  setTimeout(() => {
    log.info('sup quux')
  }, 3000)
  res.send('sup quux')
}

module.exports = {
  quuxHandler
}
