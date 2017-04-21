class LoginController {
    constructor(AuthorizationService) {
        "ngInject";

        this._AuthorizationService = AuthorizationService;
        this.email = '';
        this.password = '';
    }

    login() {
        this._AuthorizationService.login(this.email, this.password);
    }
}

export default LoginController;
