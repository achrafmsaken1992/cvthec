import { DetailscandidatModule} from './details-candidat.module';

describe('GridModule', () => {
  let detailscandidatModule: DetailscandidatModule;

  beforeEach(() => {
    detailscandidatModule = new DetailscandidatModule;
  });

  it('should create an instance', () => {
    expect(detailscandidatModule).toBeTruthy();
  })
})
