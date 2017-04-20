/**
 * Angular
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
console.log('intenta');
let loginModule = angular.module('login', [
        uiRouter
    ])
    .component('login', loginComponent);

export default loginModule;
