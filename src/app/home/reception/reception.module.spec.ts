import { ReceptionModule } from './reception.module';

describe('ReceptionModule', () => {
  let receptionModule: ReceptionModule;

  beforeEach(() => {
      receptionModule = new ReceptionModule();
  });

  it('should create an instance', () => {
    expect(receptionModule).toBeTruthy();
  });
});
