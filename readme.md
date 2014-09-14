# stream-assert [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Assert streams with ease.

## Usage

```js
var array = require('stream-array');
var assert = require('stream-assert');
var should = require('should');

array([1, 2, 3])
    .pipe(assert.first(function(data) { data.should.eql(1); }))
    .pipe(assert.second(function(data) { data.should.eql(2); }))
    .pipe(assert.nth(2, function(data) { data.should.eql(3); }))
    .pipe(assert.length(1))
    .on('end', console.log);
```

## API

### stream-assert

Builder for asserting stream. Constructed stream will emit `end` on wrong assertion about stream with assertion error as first argument.

#### nth(n, assertion)

Calls `assertion` function on `nth` element in stream.

#### first(assertion)
> alias to nth(0, obj)

#### second(assertion)
> alias to nth(1, obj)

#### last(assertion)

Calls `assertion` function on the last element in stream.

#### length(len)

Asserting, that length of stream is equal `len` at the end of the stream.

#### all(assertion)

Checking that all elements in stream pass assertion function.

#### any(assertion)

Checking that at least one of elements in stream pass assertion function.

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/stream-assert
[npm-image]: http://img.shields.io/npm/v/stream-assert.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/stream-assert
[travis-image]: http://img.shields.io/travis/floatdrop/stream-assert.svg?branch=master&style=flat

[depstat-url]: https://david-dm.org/floatdrop/stream-assert
[depstat-image]: http://img.shields.io/david/floatdrop/stream-assert.svg?style=flat
