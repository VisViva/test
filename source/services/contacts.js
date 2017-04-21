/**
 * Service
 */

export class ContactsService {
    constructor($http, $state, StoreService) {
        'ngInject';

        this._$http = $http;
        this._$state = $state;
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
        //             this._StoreService.setMyContacts(response.data.data);
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

        this._StoreService.setMyContacts({
            contacts: [{
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
            }],
            id: 0,
            name: 'John',
            surname: 'Smith'
        });
    }
}
