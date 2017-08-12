'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Userridepref Schema
 */
var UserrideprefSchema = new Schema({
	// Userridepref model fields   
	// ...
	// Adding fields for the Userridepref table
	userID:{
		type: String,
		default: 0,
		required: 'userID cannot be empty'
	},

	ridePref:{
		type: String,
		default: null,
		required: 'ride preference cannot be empty'
	},
});

mongoose.model('Userridepref', UserrideprefSchema);