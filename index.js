/*!
 * del-value <https://github.com/tunnckoCore/del-value>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('isobject')
var get = require('get-value')

module.exports = function delValue (obj, key) {
  if (!isObject(obj)) {
    return {}
  }
  if (typeof key !== 'string') {
    return obj
  }
  if (key.indexOf('.') === -1) {
    delete obj[key]
    return obj
  }

  var segs = key.split('.')
  var last = segs[segs.length - 1]
  var _key = segs.slice(0, -1).join('.')
  var parent = get(obj, _key)

  if (parent) {
    delete parent[last]
  }
  return obj
}
