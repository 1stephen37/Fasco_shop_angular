import { TestBed } from '@angular/core/testing';

import { ShopModelService } from './shop-model.service';

describe('ShopModelService', () => {
  let service: ShopModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
