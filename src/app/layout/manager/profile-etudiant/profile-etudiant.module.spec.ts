import {ProfileEtudiantModule} from './profile-etudiant.module';

describe('ProfileEtudiantModule', () => {
    let profileEtudiantModule: ProfileEtudiantModule;

    beforeEach(() => {
        profileEtudiantModule = new ProfileEtudiantModule();
    });

    it('should create an instance', () => {
        expect(profileEtudiantModule).toBeTruthy();
    });
});
