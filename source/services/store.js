/**
 * Service
 */

export class StoreService {
    constructor() {
        'ngInject';

        this._token = 'aaaaa';
        this._username = null;
    }

    setToken(token) {
        this._token = token;
    }

    getToken() {
        return this._token;
    }

    setUsername(username) {
        this._username = username;
    }

    getUsername() {
        return this._username;
    }
}
