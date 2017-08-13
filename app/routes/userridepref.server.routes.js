'use strict';

module.exports = function(app) {
	// Routing logic   
	// ...
	app.route('/userridepref')
		.get( function(request, response){

			response.json([{'userpref':'ride'},{'userpref':'drive'}]);
		});
};