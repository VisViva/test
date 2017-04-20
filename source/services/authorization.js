/**
 * Service
 */

export class AuthorizationService {
    constructor($http, StoreService) {
        'ngInject';

        this._$http = $http;
    }

    signup(name, surname, email, password) {
        return this._$http({
            url: '/api/users',
            method: 'POST',
            data: {
                name,
                surname,
                email,
                password
            }
        }).then(
            response => {
                StoreService.setUsername(response.username);
            },
            error => {
                StoreService.setUsername(null);
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
                StoreService.setToken(response.token);
            },
            error => {
                StoreService.setToken(null);
            }
        );
    }
}
