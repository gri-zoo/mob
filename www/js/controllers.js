angular.module('directory.controllers', [])


    .controller('EmployeeIndexCtrl', function ($scope, EmployeeService, Employee) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAllEmployees();
        }

        /* TODO: Add search support
        $scope.search = function () {
            EmployeeService.findByName($scope.searchKey).then(function (employees) {
                $scope.employees = employees;
            });
        }
        */

        var findAllEmployees = function() {
            $scope.employees = Employee.query();
        };

        findAllEmployees();

    })

    .controller('EmployeeDetailCtrl', function ($scope, $stateParams, Employee) {
            $scope.employee = Employee.get({employeeId: $stateParams.employeeId});
    })


    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Report) {
        $scope.employees = Report.query({employeeId: $stateParams.employeeId});
    });