'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Userridepref = mongoose.model('Userridepref');

/**
 * Globals
 */
var user, userridepref;

/**
 * Unit tests
 */
describe('Userridepref Model Unit Tests:', function() {
	

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			
			userridepref = new Userridepref({
				// Add model fields
				// ...
				'userid': '598e913d50fbe87819f14beb',
				'ridepref': 'ride'
			});
			return userridepref.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Userridepref.remove().exec();
		User.remove().exec();

		done();
	});
});