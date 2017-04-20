/**
 * Service
 */

export class StoreService {
    constructor() {
        'ngInject';

        this._token = null;
        this._username = null;
        this._error = null;
        this._subscribers = {
            token: [],
            username: []
        };
    }

    setToken(token) {
        this.set('token', this.token);
    }

    setUsername(username) {
        this.set('username', username);
    }

    setError(error) {
        this.set('error', error);
    }

    getToken() {
        return this._token;
    }

    getUsername() {
        return this._username;
    }

    getError() {
        return this._error;
    }

    set(key, value) {
        this[`_${key}`] = value;
        if (this._subscribers[key]) {
            for (let i = 0; i < this._subscribers[key].length; ++i) {
                this._subscribers[key][i](value);
            }
        }
    }

    subscribe(key, callback) {
        this._subscribers[key] = this._subscribers[key] || [];
        this._subscribers[key].push(callback);
    }

    unSubscribe(key, callback) {
        if (this._subscribers[key]) {
            const index = this._subscribers[key].indexOf(callback);
            this._subscribers[key].splice(index, 1);
        };
    }
}
