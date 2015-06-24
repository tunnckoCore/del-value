/*!
 * del-value <https://github.com/tunnckoCore/del-value>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('isobject')
var kindOf = require('kind-of')
var get = require('get-value')

module.exports = function delValue (obj, key) {
  if (!isObject(obj)) {
    return {}
  }
  var type = kindOf(key)
  if (type !== 'array' && type !== 'string') {
    return obj
  }

  var keys = key = type !== 'array' ? [key] : key
  var len = keys.length
  var i = 0

  while (i < len) {
    var path = keys[i++]

    if (path.indexOf('.') !== -1) {
      var segs = path.split('.')
      var last = segs[segs.length - 1]
      var _key = segs.slice(0, -1).join('.')
      var parent = get(obj, _key)

      if (parent) {
        delete parent[last]
      }
    }
    if (obj.hasOwnProperty(path)) {
      delete obj[path]
    }
  }

  return obj
}
