const winston = require('winston')
const cls = require('continuation-local-storage')

const { format } = winston

const clsFormat = format((info, opts = {}) => {
  const v = cls.getNamespace('omg').get('bbq')
  info['bbq'] = v
  return info
})

const myFormat = format.combine(
  format.timestamp(),
  clsFormat(),
  format.json(),
)

const log = winston.createLogger({
  level: 'silly',
  format: myFormat,
  transports: [
    new winston.transports.Console()
  ]
})

module.exports = log
