/**
 *
 * Happily copied form https://github.com/ccoenraets/angular-directory
 *
 */

'use strict';

angular.module('directory.restServices', ['ngResource'])
    .factory('Employee', ['$resource',
        function ($resource) {
            return $resource('http://localhost:3000/employees/:employeeId', {});
        }])

    .factory('Report', ['$resource',
        function ($resource) {
            return $resource('http://localhost:3000/employees/:employeeId/reports', {});
        }]);