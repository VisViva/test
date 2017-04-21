/**
 * Angular
 */

import angular from 'angular';
import Login from './login/login';

/**
 * Reserved for non lazy modules
 */

const viewsModule = angular.module('app.views', [
    Login
]).name;

export default viewsModule;
