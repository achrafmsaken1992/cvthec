import { MessagerieManagerModule } from './messagerie-manager.module';

describe('GridModule', () => {
  let messagerieManagerModule: MessagerieManagerModule;

  beforeEach(() => {
    messagerieManagerModule = new MessagerieManagerModule();
  });

  it('should create an instance', () => {
    expect(messagerieManagerModule).toBeTruthy();
  });
});
