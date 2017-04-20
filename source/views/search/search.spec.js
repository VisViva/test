import SearchModule from './search'
import SearchController from './search.controller';
import SearchComponent from './search.component';
import SearchTemplate from './search.html';

describe('Search', () => {
    let $rootScope, makeController;

    beforeEach(window.module(SearchModule));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new SearchController();
        };
    }));

    describe('Module', () => {});

    describe('Controller', () => {});

    describe('Template', () => {});

    describe('Component', () => {
        let component = SearchComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(SearchTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(SearchController);
        });
    });
});
