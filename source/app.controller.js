class AppController {
    constructor(StoreService) {
        "ngInject";

        this._StoreService = StoreService;

        this.modal = false;
        this._StoreService.subscribe('modal', (value) => {
            this.modal = value;
        });
    }

    dismissModal() {
        this.modal = false;
    }
}

export default AppController;
