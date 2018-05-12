import { DisplaycandidatModule } from './display-candidat.module';

describe('GridModule', () => {
  let displaycandidatModule: DisplaycandidatModule;

  beforeEach(() => {
    displaycandidatModule = new DisplaycandidatModule();
  });

  it('should create an instance', () => {
    expect(displaycandidatModule).toBeTruthy();
  });
});
