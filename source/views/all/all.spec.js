import AllModule from './all'
import AllController from './all.controller';
import AllComponent from './all.component';
import AllTemplate from './all.html';

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
