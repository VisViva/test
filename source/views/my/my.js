/**
 * Angular
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myComponent from './my.component';
console.log('intenta');
let myModule = angular.module('my', [
        uiRouter
    ])
    .component('my', myComponent);

export default myModule;
