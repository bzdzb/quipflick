'use strict';

angular.module('quipflickApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
