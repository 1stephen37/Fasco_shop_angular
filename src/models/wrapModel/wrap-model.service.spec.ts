import { TestBed } from '@angular/core/testing';

import { WrapModelService } from './wrap-model.service';

describe('WrapModelService', () => {
  let service: WrapModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrapModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
