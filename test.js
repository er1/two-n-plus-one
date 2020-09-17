'use strict'

var test = require('tape')
var f = require('./')

test('calculates correctly', function (assert) {
  assert.plan(6)
  assert.strictEqual(f(2), 5)
  assert.strictEqual(f(0), 1)
  assert.strictEqual(f(-1), -1)
  assert.strictEqual(f(23.5), 48)
  assert.strictEqual(f(-56), -111)
  assert.strictEqual(f(-1.5), -2)
})

test('calculates strings correctly', function (assert) {
  assert.plan(6)
  assert.strictEqual(f('2'), 5)
  assert.strictEqual(f('0'), 1)
  assert.strictEqual(f('-1'), -1)
  assert.strictEqual(f('23.5'), 48)
  assert.strictEqual(f('-56'), -111)
  assert.strictEqual(f('-1.5'), -2)
})
