angular.module('home-app', ['nav-app'])


    .directive('home', function () {
        return {
            restrict: 'E',
            controllerAs: 'homeController',
            templateUrl: "js/modules/home/home.html",
            controller: function ($scope) {
                $scope.navObj = {
                    activeDir: '1'
                }
            }
        }
    })

    .directive('homeHome', function () {
        return {
            restrict: 'E',
            controllerAs: 'homeHomeController',
            templateUrl: "js/modules/home/templates/home.html",
            controller: function ($scope) { }
        }
    })

    .directive('about', function () {
        return {
            restrict: 'E',
            controllerAs: 'aboutController',
            templateUrl: "js/modules/home/templates/about.html",
            controller: function ($scope) {
                $scope.show_more = 1;
            }
        }
    })

    .directive('services', function () {
        return {
            restrict: 'E',
            controllerAs: 'servicesController',
            templateUrl: "js/modules/home/templates/services.html",
            controller: function ($scope) {

            }
        }
    })

    .directive('contact', function () {
        return {
            restrict: 'E',
            controllerAs: 'contactController',
            templateUrl: "js/modules/home/templates/contact.html",
            controller: function ($scope) {

            }
        }
    })



