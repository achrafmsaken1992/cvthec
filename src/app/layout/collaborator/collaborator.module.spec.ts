import {CollaboratorModule} from './collaborator.module';

describe('CollaboratorModule', () => {
  let collaboratorModule: CollaboratorModule;

  beforeEach(() => {
      collaboratorModule = new CollaboratorModule();
  });

  it('should create an instance', () => {
    expect(collaboratorModule).toBeTruthy();
  });
});
