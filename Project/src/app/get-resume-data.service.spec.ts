import { TestBed } from '@angular/core/testing';

import { GetResumeDataService } from './get-resume-data.service';

describe('GetResumeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetResumeDataService = TestBed.get(GetResumeDataService);
    expect(service).toBeTruthy();
  });
});
