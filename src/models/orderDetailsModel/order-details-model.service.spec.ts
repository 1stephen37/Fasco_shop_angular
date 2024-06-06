import { TestBed } from '@angular/core/testing';

import { OrderDetailsModelService } from './order-details-model.service';

describe('OrderDetailsModelService', () => {
  let service: OrderDetailsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDetailsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
