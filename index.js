'use strict'

const errors = require('./errors')
const map = new Map()

map.set(-1, {
  name: 'Unknown'
, code: -1
, retriable: false
, message: 'An unexpected server error occurred'
})

module.exports = map

for (let i = 0; i < errors.length; i++) {
  if (errors[i])
    map.set(i, errors[i])
}
