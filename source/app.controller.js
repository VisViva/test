class AppController {
    constructor($transitions, $state, StoreService) {
        "ngInject";

        const that = this;
        this._StoreService = StoreService;
        this._$state = $state;

        this.modal = false;
        this._StoreService.subscribe('modal', (value) => {
            that.modal = value;
        });

        $transitions.onStart({ to: '*' }, (trans) => {
            let next = trans.to().url;
            switch (next) {
                case '/my':
                case '/all':
                case '/search':
                    if (!that._StoreService.getToken()) {
                        return $state.target('login');
                    }
                    break;
                case '/login':
                    if (that._StoreService.getToken()) {
                        return $state.target('all');
                    }
                    break;
                case '/signup':
                    if (that._StoreService.getToken()) {
                        return $state.target('all');
                    } else {
                        this._StoreService.setModal(false);
                    }
                    break;
            }
        });
    }

    dismissModal() {
        this._StoreService.setModal(false);
        this._$state.go('login');
    }
}

export default AppController;
