import SignupModule from './signup'
import SignupController from './signup.controller';
import SignupComponent from './signup.component';
import SignupTemplate from './signup.html';

describe('Signup', () => {
    let $rootScope, makeController;

    beforeEach(window.module(SignupModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new SignupController();
        };
    }));

    describe('Module', () => {});

    describe('Controller', () => {});

    describe('Template', () => {});

    describe('Component', () => {
        let component = SignupComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(SignupTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(SignupController);
        });
    });
});
