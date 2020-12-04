const cls = require('continuation-local-storage')

const timeoutHandler = () => {
  const v = cls.getNamespace('omg').get('bbq')
  console.log(`timeout: ${v}`)
}

module.exports = timeoutHandler
