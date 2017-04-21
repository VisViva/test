class AllController {
    constructor(ContactsService, StoreService) {
        "ngInject";

        this.allContacts = [];

        this._ContactsService = ContactsService;
        this._StoreService = StoreService;
    }

    handler = (allContacts) => {
        this.allContacts = allContacts;
    };

    $onInit = function() {
        this._StoreService.subscribe('allContacts', this.handler);
        this._ContactsService.getAllContacts();
    }

    $onDestroy = function() {
        this._StoreService.unSubscribe('allContacts', this.handler);
    }
}

export default AllController;
