var request = require('request');
// Tomato factory

module.exports = function tomatoes(url, key) {
  return new Tomato(url, key);
};

// Constructor

function Tomato(url, key) {
	var baseUrl = url, apiKey = key;

	var return_response = function (err, res, body, reply) {
		if (!err && res.statusCode == 200) {
			console.log(body.trim());
			return reply.json(body.trim());
		} else {
			console.log(err.trim());
			return reply.send(err.trim());
		}
	};

	return {
		search : function (req, reply) {
			var	title = req.params.title,
				  options = {
						url: [baseUrl + '/movies.json'].join(''),
						qs: { apikey: apiKey, q: title, page_limit: 5, page: 1 }
					};
			request(options, function(err, res, body) {
				return_response(err, res, body, reply);
			});
		},

		get : function (req, reply) {
			var id = req.params.id,
					options = {
						url: [baseUrl, '/movies/', id, '.json'].join(''),
						qs: { apikey: apiKey }
					};
			request(options, function(err, res, body) {
				return_response(err, res, body, reply);
			});
		},

		list : function (req, reply) {
			var listType = req.params.listType,
					listName = req.params.listName,
					options = {
						url: [baseUrl, '/lists/', listType, '/', listName, '.json'].join(''),
						qs: { apikey: apiKey }
					};
			request(options, function(err, res, body) {
				return_response(err, res, body, reply);
			});
		},
	};
}