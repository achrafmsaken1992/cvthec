import {MessagerieModule} from './messagerie.module';

describe('MessagerieModule', () => {
    let messagerieModule: MessagerieModule;

    beforeEach(() => {
        messagerieModule = new MessagerieModule();
    });

    it('should create an instance', () => {
        expect(messagerieModule).toBeTruthy();
    });
});
