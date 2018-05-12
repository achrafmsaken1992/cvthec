import { AddcandidatModule } from './add-candidat.module';

describe('GridModule', () => {
  let addcandidatModule: AddcandidatModule;

  beforeEach(() => {
    addcandidatModule = new AddcandidatModule();
  });

  it('should create an instance', () => {
    expect(addcandidatModule).toBeTruthy();
  });
});
