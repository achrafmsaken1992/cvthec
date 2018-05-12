import {ManagementManagerModule} from './management-manager.module';

describe('ManagementManagerModule', () => {
  let managementManagerModule: ManagementManagerModule;

  beforeEach(() => {
      managementManagerModule = new ManagementManagerModule();
  });

  it('should create an instance', () => {
    expect(managementManagerModule).toBeTruthy();
  });
});
