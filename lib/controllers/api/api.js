var config = require('../../../lib/config/config');

var path = require('path'),
	  apiPath = __dirname,
		quipflick = require(apiPath + '/quipflick/api'),
		rottentomato = require(apiPath + '/rottentomato/api');

module.exports.quipflick = quipflick;
module.exports.rottentomato = rottentomato(
	config.api.rottentomato.url, config.api.rottentomato.key);
