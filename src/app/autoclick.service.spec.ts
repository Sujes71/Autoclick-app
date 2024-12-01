import { TestBed } from '@angular/core/testing';

import { AutoclickService } from './autoclick.service';

describe('AutoclickService', () => {
  let service: AutoclickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoclickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
