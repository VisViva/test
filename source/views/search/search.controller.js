class SearchController {
    constructor(ContactsService, StoreService) {
        "ngInject";

        this.contacts = [];
        this.searchString = '';

        this._ContactsService = ContactsService;
        this._StoreService = StoreService;
    }

    handler = (searchContacts) => {
        this.contacts = searchContacts;
    };

    $onInit = function() {
        this._StoreService.subscribe('searchContacts', this.handler);
    }

    $onDestroy = function() {
        this._StoreService.unSubscribe('searchContacts', this.handler);
    }

    search() {
        this._ContactsService.searchContacts(this.searchString);
    }
}

export default SearchController;
