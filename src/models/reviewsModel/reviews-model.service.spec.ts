import { TestBed } from '@angular/core/testing';

import { ReviewsModelService } from './reviews-model.service';

describe('ReviewsModelService', () => {
  let service: ReviewsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
