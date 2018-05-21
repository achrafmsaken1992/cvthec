import {ResultatQuizModule} from './resultat-quiz.module';

describe('ResultatQuizModule', () => {
    let resultatQuizModule: ResultatQuizModule;

    beforeEach(() => {
        resultatQuizModule = new ResultatQuizModule();
    });

    it('should create an instance', () => {
        expect(resultatQuizModule).toBeTruthy();
    });
});
