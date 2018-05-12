import {ManagementEtudiantModule} from './management-etudiant.module';

describe('OffersModule', () => {
  let managementEtudiantModule: ManagementEtudiantModule;

  beforeEach(() => {
      managementEtudiantModule = new ManagementEtudiantModule();
  });

  it('should create an instance', () => {
    expect(managementEtudiantModule).toBeTruthy();
  });
});
