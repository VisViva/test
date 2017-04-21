class MyController {
    constructor(ContactsService, StoreService) {
        "ngInject";

        this.contacts = [];
        this.editing = [];
        this.newContact = {
            type: '',
            text: ''
        };

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

    edit(id) {
        this.editing[id] = true;
    }

    save(contact) {
        this._ContactsService.saveMyContact(contact).then(() => {
            this.editing[contact.id] = false;
        });
    }

    add() {
        this._ContactsService.addMyContact({
            type: this.newContact.type,
            text: this.newContact.text
        }).then(() => {
            this.newContact.type = '';
            this.newContact.text = '';
        });
    }
}

export default MyController;
