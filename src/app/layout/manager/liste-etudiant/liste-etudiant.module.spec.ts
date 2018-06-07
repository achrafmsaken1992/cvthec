import {ListeEtudiantModule} from './liste-etudiant.module';

describe('ListeEtudiantModule', () => {
    let listeEtudiantModule: ListeEtudiantModule;

    beforeEach(() => {
        listeEtudiantModule = new ListeEtudiantModule();
    });

    it('should create an instance', () => {
        expect(listeEtudiantModule).toBeTruthy();
    });
});
