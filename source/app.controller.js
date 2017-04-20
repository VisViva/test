class AppController {
    constructor(StoreService) {
        "ngInject";

        this._StoreService = StoreService;

        this.error = null;
        this._StoreService.subscribe('error', (error) => {
            this.error = error;
        });
    }
}

export default AppController;
