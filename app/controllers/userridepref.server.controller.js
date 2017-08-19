'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Userridepref = mongoose.model('Userridepref'),
    _ = require('lodash');

/**
 * Create a Userridepref
 */
exports.create = function(req, res) {

  var newPref = new Userridepref(req.body);

  newPref.save(function(err){

  		if (err) {
			res.status(400).send({

				message : errorHandler.getErrorMessage(err)
			});
		}
		else{
			res.status(201).json(newPref);
		}
  });
};

/**
 * Show the current Userridepref
 */
exports.read = function(req, res) {

	// getting objects by id

	Userridepref.findById(req.params.prefId).exec(function(err, ridepref){

		if (err) {
			res.status(400).send({

			message : errorHandler.getErrorMessage(err)
			});
		}
		else{

			if (!ridepref) {

				return	res.status(404).send({
					message : 'Ride preference not found'
				});
			}
			res.json(ridepref);
		}		

	});
};

/**
 * Update a Userridepref
 */
exports.update = function(req, res) {

};

/**
 * Delete an Userridepref
 */
exports.delete = function(req, res) {

};

/**
 * List of Userrideprefs
 */
exports.list = function(req, res) {

	Userridepref.find().exec( function(err, userrideprefs){

		if (err) {
			res.status(400).send({

				message : errorHandler.getErrorMessage(err)
			});
		}
		else{
			res.json(userrideprefs);
		}
	});
};