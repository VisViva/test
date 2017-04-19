import angular from 'angular';
import mocks from 'angular-mocks';
let context = require.context('./source', true, /\.spec\.js/);
context.keys().forEach(context);
