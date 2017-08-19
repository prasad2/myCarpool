'use strict';

module.exports = function(app) {
	// Routing logic   
	// ...
	var userrideprefs = require('../../app/controllers/userridepref.server.controller');

	app.route('/userridepref')
		.get( userrideprefs.list);

	app.route('/userridepref/newpref')
		.post(userrideprefs.create);

	app.route('/userridepref/:prefId')
		.getElementsByTagName('')(userrideprefs.read);
};