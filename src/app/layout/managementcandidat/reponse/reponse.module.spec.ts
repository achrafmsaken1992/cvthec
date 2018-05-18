import { ReponseModule } from './reponse.module';

describe('ReponseModule', () => {
    let reponseModule: ReponseModule;

    beforeEach(() => {
        reponseModule = new ReponseModule();
    });

    it('should create an instance', () => {
        expect(reponseModule).toBeTruthy();
    });
});
