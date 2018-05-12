import { DisplayUrhModule } from './display-rhs.module';

describe('GridModule', () => {
  let displayUrhModule: DisplayUrhModule;

  beforeEach(() => {
    displayUrhModule = new DisplayUrhModule();
  });

  it('should create an instance', () => {
    expect(displayUrhModule).toBeTruthy();
  });
});
