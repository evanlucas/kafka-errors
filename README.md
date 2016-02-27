# kafka-errors

[![Build Status](https://travis-ci.org/evanlucas/kafka-errors.svg)](https://travis-ci.org/evanlucas/kafka-errors)
[![Coverage Status](https://coveralls.io/repos/evanlucas/kafka-errors/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/kafka-errors?branch=master)

A way to map kafka error codes to actual Error objects

## Install

```bash
$ npm install [--save] kafka-errors
```

## Usage

```js
'use strict'

const errors = require('kafka-errors')

console.log(errors.get(2))
```

Will print the following:

```js
{ name: 'InvalidMessage'
, code: 2
, retriable: true
, message: 'Message contents do not match CRC'
}
```

## Test

```bash
$ npm test
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
