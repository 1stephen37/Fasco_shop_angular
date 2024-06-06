import { TestBed } from '@angular/core/testing';

import { OrderModelService } from './order-model.service';

describe('OrderModelService', () => {
  let service: OrderModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
