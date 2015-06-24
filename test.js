/*!
 * del-value <https://github.com/tunnckoCore/del-value>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var del = require('./index')
var has = require('has-value')

test('del-value:', function () {
  test('should return empty object if not object given', function (done) {
    test.deepEqual(del(), {})
    test.deepEqual(del(123456789), {})
    test.deepEqual(del('strings'), {})
    test.deepEqual(del([1, 2, 3]), {})
    test.equal(!has(del()), !has({}))
    done()
  })
  test('should return original object if `key` is not string or array', function (done) {
    test.deepEqual(del({a: 'b'}, 22), {a: 'b'})
    test.deepEqual(del({a: 'b'}, {}), {a: 'b'})
    done()
  })
  test('should return original object if `key` not exist', function (done) {
    test.deepEqual(del({a: 'b'}, 'foo'), {a: 'b'})
    test.deepEqual(del({a: 'b'}, 'a.b.c'), {a: 'b'})
    done()
  })
  test('should return modified object after `key` is deleted', function (done) {
    test.deepEqual(del({a: {b: {c: 'ddd'}, e: 'ee'}, foo: 'bar'}, 'a'), {foo: 'bar'})
    test.deepEqual(del({a: {b: {c: 'ddd'}, e: 'ee'}, foo: 'bar'}, 'a.b'), {a: {e: 'ee'}, foo: 'bar'})
    test.deepEqual(del({a: 'b', c: {d: 'e'}}, 'c.d'), {a: 'b', c: {}})
    test.deepEqual(del({a: 'b', c: {d: 'e'}}, 'c'), {a: 'b'})
    done()
  })
  test('should support array of property paths', function (done) {
    var actual = {a: {b: {c: 'ddd'}, e: 'ee'}, foo: 'bar', baz: {qux: 'dad', w: 'www'}}
    var expected = {a: {e: 'ee'}, baz: {w: 'www'}}

    test.deepEqual(del(actual, ['a.b', 'foo', 'baz.qux']), expected)
    test.deepEqual(del(actual, ['a.b', 'a.e', 'foo', 'baz.qux', 'baz.w']), {a: {}, baz: {}})
    test.deepEqual(del(actual, ['a.b', 'a.e', 'foo', 'baz']), {a: {}})
    done()
  })
})
