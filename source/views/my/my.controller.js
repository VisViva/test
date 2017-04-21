class MyController {
    constructor(ContactsService, StoreService) {
        "ngInject";

        this.contacts = [];

        this._ContactsService = ContactsService;
        this._StoreService = StoreService;
    }

    handler = (myContacts) => {
        this.contacts = myContacts;
    };

    $onInit = function() {
        this._StoreService.subscribe('myContacts', this.handler);
        this._ContactsService.getMyContacts();
    }

    $onDestroy = function() {
        this._StoreService.unSubscribe('myContacts', this.handler);
    }

    delete(id) {
        this._ContactsService.deleteMyContact(id);
    }
}

export default MyController;
