/**
 * Service
 */

export class StoreService {
    constructor() {
        'ngInject';

        this._token = null;
        this._username = null;
        this._modal = false;
        this._allContacts = [];
        this._myContacts = [];
        this._subscribers = {
            token: [],
            username: []
        };
    }

    setToken(token) {
        this.set('token', `Bearer ${token}`);
    }

    setUsername(username) {
        this.set('username', username);
    }

    setModal(value) {
        this.set('modal', value);
    }

    setAllContacts(value) {
        this.set('allContacts', value);
    }

    setMyContacts(value) {
        this.set('myContacts', value);
    }

    getToken() {
        return this._token;
    }

    getUsername() {
        return this._username;
    }

    getModal() {
        return this._modal;
    }

    getMyContacts(value) {
        return this._myContacts;
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
