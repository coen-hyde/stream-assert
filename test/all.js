/* global describe, it */

var array = require('stream-array');
var assert = require('../index.js');
var should = require('should');
var to = require('tobe');

describe('assert.all', function () {
	it('should check all elements in stream', function (done) {
		array([1, 1])
			.pipe(assert.all(to.be.eql(1)))
			.on('end', done);
	});

	it('should emit end with error on wrong assertion', function (done) {
		array([1, 2])
			.pipe(assert.all(function (obj) { obj.should.eql(1); }))
			.on('end', function (err) {
				should.exist(err);
				err.message.should.eql('Element on 1 position is not passing assertion: expected 2 to equal 1');
				done();
			});
	});
});
