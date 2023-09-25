import { TestBed } from '@angular/core/testing';

import { EmployeeMockService } from './employee-mock.service';

describe('EmployeeMockService', () => {
  let service: EmployeeMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
