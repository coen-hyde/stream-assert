/* global describe, it */

var array = require('stream-array');
var assert = require('../index.js');
var should = require('should');

describe('assert.length', function () {
	it('should validate stream length', function (done) {
		array([1])
			.pipe(assert.length(1))
			.pipe(assert.end(done));
	});

	it('should emit end with error on wrong assertion', function (done) {
		array([1])
			.pipe(assert.length(2))
			.pipe(assert.end(function (err) {
				should.exist(err);
				err.message.should.eql('Expected length 2 is not equal 1');
				done();
			}));
	});

	it('should accept function as assertion', function (done) {
		array([1])
			.pipe(assert.length(function (len) { len.should.eql(1); }))
			.pipe(assert.end(done));
	});
});
