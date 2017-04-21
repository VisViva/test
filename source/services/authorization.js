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
        // return this._$http({
        //     url: '/api/users',
        //     method: 'POST',
        //     data: user
        // }).then(
        //     response => {
        //         this._StoreService.setUsername(response.data.username);
        //         this._$state.go('login');
        //     },
        //     error => {
        //         switch (error.status) {
        //             case 400:
        //                 break;
        //         }
        //         this._StoreService.setUsername(null);
        //     }
        // );

        this._StoreService.setUsername('John');
        this._$state.transitionTo('login');
    }

    login(email, password) {
        // return this._$http({
        //     url: '/api/login',
        //     method: 'POST',
        //     data: {
        //         email,
        //         password
        //     }
        // }).then(
        //     response => {
        //         this._StoreService.setModal(false);
        //         this._StoreService.setToken(response.data.token);
        //         this._$state.go('my');
        //     },
        //     error => {
        //         switch (error.status) {
        //             case 400:
        //                 break;
        //         }
        //         this._StoreService.setToken(null);
        //     }
        // );

        this._StoreService.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
        this._$state.transitionTo('auth-my');
    }
}
