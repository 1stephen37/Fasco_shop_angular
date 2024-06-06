import { TestBed } from '@angular/core/testing';

import { SizesModelService } from './sizes-model.service';

describe('SizesModelService', () => {
  let service: SizesModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizesModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
