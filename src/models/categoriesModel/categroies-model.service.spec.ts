import { TestBed } from '@angular/core/testing';

import { CategoriesModelService } from './categories-model.service';

describe('CategroiesModelService', () => {
  let service: CategoriesModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
