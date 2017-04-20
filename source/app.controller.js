class AppController {
    constructor($transitions, $state, StoreService) {
        "ngInject";

        this._StoreService = StoreService;

        this.modal = false;
        this._StoreService.subscribe('modal', (value) => {
            this.modal = value;
        });

        $transitions.onStart({ to: '*' }, (trans) => {
            let next = trans.to().url;
            switch (next) {
                case '/my':
                case '/all':
                case '/search':
                    if (!this._StoreService.getToken()) {
                        return $state.target('login');
                    }
                    break;
                case '/login':
                case '/signup':
                    if (this._StoreService.getToken()) {
                        return $state.target('my');
                    }
                    break;
            }
        });
    }

    dismissModal() {
        this.modal = false;
    }
}

export default AppController;
