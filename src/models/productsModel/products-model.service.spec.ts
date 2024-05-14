import { TestBed } from '@angular/core/testing';

import { ProductsModelService } from './products-model.service';

describe('ProductService', () => {
  let service: ProductsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
