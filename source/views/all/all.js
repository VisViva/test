/**
 * Angular
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import allComponent from './all.component';
let allModule = angular.module('all', [
        uiRouter
    ])
    .component('all', allComponent);

export default allModule;
