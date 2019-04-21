import { TestBed } from '@angular/core/testing';

import { TargetCompanyService } from './target-company.service';

describe('TargetCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetCompanyService = TestBed.get(TargetCompanyService);
    expect(service).toBeTruthy();
  });
});
