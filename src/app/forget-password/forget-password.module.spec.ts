import { ForgetpasswordModule } from './forget-password.module';

describe('ForgetpasswordModule', () => {
  let forgetpasswordModule: ForgetpasswordModule;

  beforeEach(() => {
    forgetpasswordModule = new ForgetpasswordModule();
  });

  it('should create an instance', () => {
    expect(forgetpasswordModule).toBeTruthy();
  });
});
