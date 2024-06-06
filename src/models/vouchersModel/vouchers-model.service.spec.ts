import { TestBed } from '@angular/core/testing';

import { VouchersModelService } from './vouchers-model.service';

describe('VouchersModelService', () => {
  let service: VouchersModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VouchersModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
