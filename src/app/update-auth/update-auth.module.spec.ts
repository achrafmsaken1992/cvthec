import { updateAuthModule} from './update-auth.module';

describe('ReceptionModule', () => {
  let updateAuth: updateAuthModule;

  beforeEach(() => {
    updateAuth = new updateAuthModule();
  });

  it('should create an instance', () => {
    expect(updateAuth).toBeTruthy();
  });
});
