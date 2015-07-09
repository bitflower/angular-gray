/*!
 * angular-gray 0.1.0
 * Date: 2015-07-09
 * Matthias Max, bitflower e.K., http://www.bitflower.net
 * License: MIT
 * jQuery code originally by Karl Horky, https://github.com/karlhorky
 * https://github.com/karlhorky/gray
 */
(function() {

    'use strict';

    var app = angular.module('net.bitflower.grayscale', []);

    app.directive('grayscale', [function() {
        return {
            restrict: 'A',
            scope: {
                grayscale: '=',
                ngSrc: '@'
            },
            link: function(scope, element, attrs) {

                // Set class
                element.addClass('grayscale');

                // Set configuration
                if (attrs && attrs.grayscale) {
                    var config = scope.$eval(attrs.grayscale);
                    if (config.hover) {
                        element.addClass('grayscale-fade');
                    }
                }

                // Register image loaded event
                element.on('load', function() {

                    // Apply jQuery plugin
                    element.gray();

                }).on('error', function() {
                    //
                });


            }
        };
    }]);

})();
