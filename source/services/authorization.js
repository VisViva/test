/**
 * Service
 */

export class AuthorizationService {
    constructor($http, $state, StoreService) {
        'ngInject';

        this._$http = $http;
        this._$state = $state;
        this._StoreService = StoreService;
    }

    signup(user) {
        return this._$http({
            url: '/api/users',
            method: 'POST',
            data: user
        }).then(
            response => {
                this._StoreService.setUsername(response.username);
                this._$state.go('login');
            },
            error => {
                this._StoreService.setUsername(null);
                this._StoreService.setError(error);
            }
        );
    }

    login(email, password) {
        return this._$http({
            url: '/api/login',
            method: 'POST',
            data: {
                email,
                password
            }
        }).then(
            response => {
                this._StoreService.setToken(response.token);
                this._$state.go('my');
            },
            error => {
                this._StoreService.setToken(null);
                this._StoreService.setError(error);
            }
        );
    }
}
