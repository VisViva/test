/**
 * Service
 */

export class ContactsService {
    constructor($http, $state, $q, $timeout, StoreService) {
        'ngInject';

        this._$http = $http;
        this._$state = $state;
        this._$q = $q;
        this._$timeout = $timeout;
        this._StoreService = StoreService;
    }

    getAllContacts() {
        // return this._$http({
        //     url: '/api/contacts_list',
        //     method: 'GET',
        //     headers: {
        //         'Authorization': this._StoreService.getToken()
        //     }
        // }).then(
        //     response => {
        //         if (response.data.success) {
        //             this._StoreService.setAllContacts(response.data.data);
        //         } else {
        //             this._StoreService.setAllContacts([]);
        //         }
        //     },
        //     error => {
        //         switch (error.status) {
        //             case 400:
        //                 break;
        //             case 401:
        //                 this._StoreService.setModal(true);
        //                 break;
        //         }
        //         this._StoreService.setAllContacts([]);
        //     }
        // );
        const deferred = this._$q.defer();
        this._$timeout(() => {
            this._StoreService.setAllContacts(
                [{
                    contacts: [{
                        id: 0,
                        text: 'email0@gmail.com',
                        type: 'email'
                    }, {
                        id: 1,
                        text: 'email1@gmail.com',
                        type: 'email'
                    }, {
                        id: 2,
                        text: 'email2@gmail.com',
                        type: 'email'
                    }],
                    id: 0,
                    name: 'John',
                    surname: 'Smith'
                }, {
                    contacts: [{
                        id: 3,
                        text: 'email3@gmail.com',
                        type: 'email'
                    }, {
                        id: 4,
                        text: 'email4@gmail.com',
                        type: 'email'
                    }, {
                        id: 5,
                        text: 'email5@gmail.com',
                        type: 'email'
                    }, {
                        id: 6,
                        text: 'email6@gmail.com',
                        type: 'email'
                    }],
                    id: 1,
                    name: 'Jack',
                    surname: 'Black'
                }]
            );
            deferred.resolve();
        }, 200);
        return deferred.promise;
    }

    getMyContacts() {
        // return this._$http({
        //     url: '/api/contacts',
        //     method: 'GET',
        //     headers: {
        //         'Authorization': this._StoreService.getToken()
        //     }
        // }).then(
        //     response => {
        //         if (response.data.success) {
        //             this._StoreService.setMyContacts(response.data.contacts);
        //         } else {
        //             this._StoreService.setMyContacts([]);
        //         }
        //     },
        //     error => {
        //         switch (error.status) {
        //             case 400:
        //                 break;
        //             case 401:
        //                 this._StoreService.setModal(true);
        //                 break;
        //         }
        //         this._StoreService.setMyContacts([]);
        //     }
        // );
        const deferred = this._$q.defer();
        this._$timeout(() => {
            this._StoreService.setMyContacts([{
                id: 0,
                text: '+8789567765',
                type: 'phone'
            }, {
                id: 1,
                text: '+7575757575',
                type: 'phone'
            }, {
                id: 2,
                text: '+7123123123',
                type: 'phone'
            }, {
                id: 3,
                text: '+2465276574',
                type: 'phone'
            }, {
                id: 4,
                text: '+3467578567',
                type: 'phone'
            }, {
                id: 5,
                text: '+7575757575',
                type: 'phone'
            }, {
                id: 6,
                text: '+2346998746',
                type: 'phone'
            }]);
            deferred.resolve();
        }, 200);
        return deferred.promise;
    }

    deleteMyContact(id) {
        // return this._$http({
        //     url: '/api/contacts',
        //     method: 'DELETE',
        //     data: { id }
        //     headers: {
        //         'Authorization': this._StoreService.getToken()
        //     }
        // }).then(
        //     response => {
        //         if (response.data.success) {
        //             let mutatedContacts = this._StoreService.getMyContacts();
        //             mutatedContacts = mutatedContacts.filter(value => value.id !== id);
        //             this._StoreService.setMyContacts(mutatedContacts);
        //         }
        //     },
        //     error => {
        //         switch (error.status) {
        //             case 400:
        //                 break;
        //             case 401:
        //                 this._StoreService.setModal(true);
        //                 break;
        //         }
        //         this._StoreService.setMyContacts([]);
        //     }
        // );
        const deferred = this._$q.defer();
        this._$timeout(() => {
            let mutatedContacts = this._StoreService.getMyContacts();
            mutatedContacts = mutatedContacts.filter(value => value.id !== id);
            this._StoreService.setMyContacts(mutatedContacts);
            deferred.resolve();
        }, 200);
        return deferred.promise;
    }

    saveMyContact(contact) {
        // return this._$http({
        //     url: '/api/contacts',
        //     method: 'PUT',
        //     data: contact,
        //     headers: {
        //         'Authorization': this._StoreService.getToken()
        //     }
        // }).then(
        //     response => {
        //         if (response.data.success) {
        //             this._StoreService.setMyContacts(response.data.contacts);
        //         }
        //     },
        //     error => {
        //         switch (error.status) {
        //             case 400:
        //                 break;
        //             case 401:
        //                 this._StoreService.setModal(true);
        //                 break;
        //         }
        //     }
        // );
        const deferred = this._$q.defer();
        this._$timeout(() => {
            deferred.resolve();
        }, 200);
        return deferred.promise;
    }
}
