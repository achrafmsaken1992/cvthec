import {QuizsOffersModule} from './quizs-offers.module';

describe('QuizsOffersModule', () => {
    let quizsOffersModule: QuizsOffersModule;

    beforeEach(() => {
        quizsOffersModule = new QuizsOffersModule();
    });

    it('should create an instance', () => {
        expect(quizsOffersModule).toBeTruthy();
    });
});
