'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/fullstack-dev'
  },
	api: {
		rottentomato: {
			key: '',
			url: 'http://api.rottentomatoes.com/api/public/v1.0'
		}
	}
};