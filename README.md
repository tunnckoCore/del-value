# del-value [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Delete deeply nested values from an object using object property paths with dot notation like `a.b.c.x` and return the modified object if success, otherwise return original object.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i del-value --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var del = require('del-value')

del({a: 'b'}, 'foo') //=> {a: 'b'}
del({a: 'b', c: 'd'}, 'c') //=> {a: 'b'}
del({a: 'b', c: {d: 'e'}}, 'c.d') //=> {a: 'b', c: {}}
del({a: 'b', c: {d: 'e'}}, 'c') //=> {a: 'b'}
del({a: 'b', c: {d: 'e', g: 'g'}}, 'c.d') //=> {a: 'b', c: {g: 'g'}}
del({a: 'b', c: {d: 'e', g: 'g'}, z: 'z'}, ['a', 'c.d']) //=> {c: {g: 'g'}, z: 'z'}
del({a: 'b', c: 'd'}, ['a', 'c']) //=> {}
```


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/del-value/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/del-value
[npmjs-img]: https://img.shields.io/npm/v/del-value.svg?label=del-value

[license-url]: https://github.com/tunnckoCore/del-value/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/del-value
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/del-value.svg

[travis-url]: https://travis-ci.org/tunnckoCore/del-value
[travis-img]: https://img.shields.io/travis/tunnckoCore/del-value.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/del-value
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/del-value.svg

[david-url]: https://david-dm.org/tunnckoCore/del-value
[david-img]: https://img.shields.io/david/tunnckoCore/del-value.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
