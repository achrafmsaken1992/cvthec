import { OffersModule } from './offres.module';

describe('OffersModule', () => {
    let offersModule: OffersModule;

    beforeEach(() => {
        offersModule = new OffersModule();
    });

    it('should create an instance', () => {
        expect(offersModule).toBeTruthy();
    });
});
