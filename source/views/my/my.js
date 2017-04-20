/**
 * Angular
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myComponent from './my.component';
let myModule = angular.module('my', [
        uiRouter
    ])
    .component('my', myComponent);

export default myModule;
