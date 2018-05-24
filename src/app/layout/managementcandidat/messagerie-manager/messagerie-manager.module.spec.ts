import { MessagerieManagerModule } from './messagerie-manager.module';

describe('messagerieManagerModule', () => {
  let messagerieManagerModule: MessagerieManagerModule;

  beforeEach(() => {
    messagerieManagerModule = new MessagerieManagerModule();
  });

  it('should create an instance', () => {
    expect(messagerieManagerModule).toBeTruthy();
  });
});
