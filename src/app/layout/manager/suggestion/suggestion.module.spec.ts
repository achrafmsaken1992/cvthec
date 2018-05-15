import {SuggestionModule} from './suggestion.module';

describe('QuizsOffersModule', () => {
    let suggestionModule: SuggestionModule;

    beforeEach(() => {
        suggestionModule = new SuggestionModule();
    });

    it('should create an instance', () => {
        expect(suggestionModule).toBeTruthy();
    });
});
