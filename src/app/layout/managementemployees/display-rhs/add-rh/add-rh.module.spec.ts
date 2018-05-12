import { AddUrhModule } from './add-rh.module';

describe('GridModule', () => {
  let addUrhModule: AddUrhModule;

  beforeEach(() => {
      addUrhModule = new AddUrhModule();
  });

  it('should create an instance', () => {
    expect(addUrhModule).toBeTruthy();
  });
});
