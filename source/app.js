/**
 * Angular
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload'

/**
 * Vendor styles
 */

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Components
 */

import Views from './views/views';
import AppComponent from './app.component';

/**
 * Declare module
 */

angular.module('app', [
        uiRouter,
        ocLazyLoad,
        Views
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        "ngInject";
        $locationProvider.html5Mode(true).hashPrefix('!');
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                template: '<app></app>'
            })
            .state('app.signup', {
                url: '/signup',
                template: '<signup></signup>',
                resolve: {
                    lazyLoad($q, $ocLazyLoad) {
                        "ngInject";
                        let deferred = $q.defer();
                        require.ensure([], function() {
                            let module = require('./views/signup/signup');
                            $ocLazyLoad.load({
                                name: module.default.name
                            });
                            deferred.resolve(module);
                        });
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/app/signup');
    })
    .component('app', AppComponent);
