/**
 * MarkerController
 *
 * @description :: Server-side logic for managing markers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
		console.log(req.params.all());
		Marker.create(req.params.all(), function (err, marker) {
			if (err) {
				res.redirect('/marker/new');
			} else {
				res.redirect('/map');
			}
		});

	}

//activate the below, add a comma on the line above and navigate to local/marker
//to delete unwanted markers

	// index: function (req, res, next) {
	//
	// //Get an array of all users in the User collection(e.g. table)
	// Marker.find(function foundMarkers (err, markers) {
	// 	if (err) return next(err);
	// 	// pass the array down to the /views/index.ejs page
	// 	res.view({
	// 		markers: markers
	// 	});
	// });
	// }
};
