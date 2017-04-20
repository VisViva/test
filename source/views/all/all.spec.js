import AllModule from './search'
import AllController from './search.controller';
import AllComponent from './search.component';
import AllTemplate from './search.html';

describe('All', () => {
    let $rootScope, makeController;

    beforeEach(window.module(AllModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new AllController();
        };
    }));

    describe('Module', () => {});

    describe('Controller', () => {});

    describe('Template', () => {});

    describe('Component', () => {
        let component = AllComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(AllTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(AllController);
        });
    });
});
