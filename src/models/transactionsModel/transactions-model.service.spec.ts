import { TestBed } from '@angular/core/testing';

import { TransactionsModelService } from './transactions-model.service';

describe('TransactionsModelService', () => {
  let service: TransactionsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
