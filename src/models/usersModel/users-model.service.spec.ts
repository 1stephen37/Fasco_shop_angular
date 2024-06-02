import { TestBed } from '@angular/core/testing';

import { UsersModelService } from './users-model.service';

describe('UsersModelService', () => {
  let service: UsersModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
