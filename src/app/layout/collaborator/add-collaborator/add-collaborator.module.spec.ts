import {AddCollaboratorModule} from './add-collaborator.module';

describe('AddCollaboratorModule', () => {
  let addCollaboratorModule: AddCollaboratorModule;

  beforeEach(() => {
      addCollaboratorModule = new AddCollaboratorModule();
  });

  it('should create an instance', () => {
    expect(addCollaboratorModule).toBeTruthy();
  });
});
