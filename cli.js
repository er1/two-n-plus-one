#!/usr/bin/env node
'use strict'

var twoNPlusOne = require('.')

process.argv.slice(2).forEach(function (argument) {
  process.stdout.write(twoNPlusOne(argument) + '\n')
})
