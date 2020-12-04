const express = require('express')
const cls = require('continuation-local-storage')
const clsify = require('cls-middleware')

const {
  fooHandler
} = require('./foo')
const {
  barHandler
} = require('./bar')

function mkhandler (rhfn) {
  return function inst(req, res) {
    const myheader = req.headers['x-myheader']
    cls.getNamespace('omg').set('bbq', myheader)
    rhfn(req, res)
  }
}

const app = express()
app.use(clsify(cls.createNamespace('omg')))

app.get('/foo', mkhandler(fooHandler))
app.get('/bar', mkhandler(barHandler))

app.listen(4444, () => {
  console.log('listen 4444')
})
