module.exports = function(app) {

	// server routes ===========================================================
		// handle things like api calls
		// authentication routes

		// SAMPLE  api route
		app.get('/api/nerds', function(req, res) {
			// use mongoose to get all nerds in the database
			Nerd.find(function(err, nerds) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json(nerds); // return all nerds in JSON format
			});
		});

		// route to handle creating (app.post)
		// route to handle delete (app.delete)





	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

};