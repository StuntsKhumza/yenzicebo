angular.module('nav-app', [])
    .directive('navApp', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/modules/utils/nav/nav.html',
            controllerAs: 'navCtr',
            controller: function ($scope) {

                this.goto = function (id) {
                    
                   $scope.navObj.activeDir = id;

                   //hide menu

                   hideMenu();
                }

            }
        }
    })