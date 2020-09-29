import { TestBed } from '@angular/core/testing';

import { CommentsApiClientService } from './comments-api-client.service';

describe('CommentsApiClientService', () => {
  let service: CommentsApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
