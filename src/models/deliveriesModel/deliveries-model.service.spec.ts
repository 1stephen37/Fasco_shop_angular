import { TestBed } from '@angular/core/testing';

import { DeliveriesModelService } from './deliveries-model.service';

describe('DeliveriesModelService', () => {
  let service: DeliveriesModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveriesModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
