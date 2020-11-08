import { TestBed } from '@angular/core/testing';

import { GitsearchRequestService } from './gitsearch-request.service';

describe('GitsearchRequestService', () => {
  let service: GitsearchRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitsearchRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
