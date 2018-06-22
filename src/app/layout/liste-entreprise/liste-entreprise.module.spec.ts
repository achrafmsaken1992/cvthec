import {ListeEntrepriseModule} from './liste-entreprise.module';

describe('ListeEntrepriseModule', () => {
    let listeEntrepriseModule: ListeEntrepriseModule;

    beforeEach(() => {
        listeEntrepriseModule = new ListeEntrepriseModule();
    });

    it('should create an instance', () => {
        expect(listeEntrepriseModule).toBeTruthy();
    });
});
