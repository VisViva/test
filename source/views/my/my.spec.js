import MyModule from './my'
import MyController from './my.controller';
import MyComponent from './my.component';
import MyTemplate from './my.html';

describe('My', () => {
    let $rootScope, makeController;

    beforeEach(window.module(MyModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new MyController();
        };
    }));

    describe('Module', () => {});

    describe('Controller', () => {});

    describe('Template', () => {});

    describe('Component', () => {
        let component = MyComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(MyTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(MyController);
        });
    });
});
