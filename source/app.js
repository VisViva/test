/**
 * Angular
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';

/**
 * Modules
 */

import { StoreService } from './services/store';
import { AuthorizationService } from './services/authorization';
import { ContactsService } from './services/contacts';

/**
 * Vendor styles
 */

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Components
 */

import AppComponent from './app.component';
import Views from './views/views';

/**
 * Declare module
 */

angular.module('app', [
        uiRouter,
        ocLazyLoad,
        Views
    ])
    .service('StoreService', StoreService)
    .service('AuthorizationService', AuthorizationService)
    .service('ContactsService', ContactsService)
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        "ngInject";
        $locationProvider.html5Mode(true).hashPrefix('!');
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                template: '<app></app>'
            })
            .state('signup', {
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
            })
            .state('login', {
                url: '/login',
                template: '<login></login>'
            })
            .state('my', {
                url: '/my',
                template: '<my></my>',
                resolve: {
                    lazyLoad($q, $ocLazyLoad) {
                        "ngInject";
                        let deferred = $q.defer();
                        require.ensure([], function() {
                            let module = require('./views/my/my');
                            $ocLazyLoad.load({
                                name: module.default.name
                            });
                            deferred.resolve(module);
                        });
                        return deferred.promise;
                    }
                }
            })
            .state('search', {
                url: '/search',
                template: '<search></search>',
                resolve: {
                    lazyLoad($q, $ocLazyLoad) {
                        "ngInject";
                        let deferred = $q.defer();
                        require.ensure([], function() {
                            let module = require('./views/search/search');
                            $ocLazyLoad.load({
                                name: module.default.name
                            });
                            deferred.resolve(module);
                        });
                        return deferred.promise;
                    }
                }
            })
            .state('all', {
                url: '/all',
                template: '<all></all>',
                resolve: {
                    lazyLoad($q, $ocLazyLoad) {
                        "ngInject";
                        let deferred = $q.defer();
                        require.ensure([], function() {
                            let module = require('./views/all/all');
                            $ocLazyLoad.load({
                                name: module.default.name
                            });
                            deferred.resolve(module);
                        });
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('signup');
    })
    .component('app', AppComponent);
