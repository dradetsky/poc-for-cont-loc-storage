const cls = require('continuation-local-storage')

function fooHandler(req, res) {
  const v = cls.getNamespace('omg').get('bbq')
  res.send(`sup foo: ${v}`)
}

module.exports = {
  fooHandler
}
