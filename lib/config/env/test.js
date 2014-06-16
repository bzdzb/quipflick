'use strict';

module.exports = {
  env: 'test',
  mongo: {
    uri: 'mongodb://localhost/fullstack-test'
  },
	api: {
		rottentomato: {
			key: '',
			url: 'http://api.rottentomatoes.com/api/public/v1.0'
		}
	}
};