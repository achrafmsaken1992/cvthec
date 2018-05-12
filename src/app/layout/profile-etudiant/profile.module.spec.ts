import { ProfileUrhModule } from './profile.module';

describe('GridModule', () => {
  let profileUrhModule: ProfileUrhModule;

  beforeEach(() => {
    profileUrhModule = new ProfileUrhModule();
  });

  it('should create an instance', () => {
    expect(profileUrhModule).toBeTruthy();
  });
});
