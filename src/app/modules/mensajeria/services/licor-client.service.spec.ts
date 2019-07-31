import { TestBed } from '@angular/core/testing';

import { LicorClientService } from './licor-client.service';

describe('LicorClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicorClientService = TestBed.get(LicorClientService);
    expect(service).toBeTruthy();
  });
});
