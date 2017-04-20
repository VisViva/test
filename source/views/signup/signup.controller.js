class SignupController {
    constructor(AuthorizationService) {
        "ngInject";

        this._AuthorizationService = AuthorizationService;
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    signup() {
        this._AuthorizationService.signup(this.user);
    }
}

export default SignupController;
